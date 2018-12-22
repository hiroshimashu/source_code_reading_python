# -*- coding: utf-8 -*-

import os
import sys
import warnings
from datetime import timedelta
from functools import update_wrapper
from itertools import chain
from threading import Lock

from werkzeug.datastructures import Headers, ImmutableDict
from werkzeug.exceptions import BadRequest, BadRequestKeyError, HTTPException, \
    InternalServerError, MethodNotAllowed, default_exceptions
from werkzeug.routing import BuildError, Map, RequestRedirect, Rule

from . import cli, json
from ._compat import integer_types, reraise, string_types, text_type
from .config import Config, ConfigAttribute
from .ctx import AppContext, RequestContext, _AppCtxGlobals
from .globals import _request_ctx_stack, g, request, session
from .helpers import (
    _PackageBoundObject,
    _endpoint_from_view_func, find_package, get_env, get_debug_flag,
    get_flashed_messages, locked_cached_property, url_for, get_load_dotenv
)
from .logging import create_logger
from .sessions import SecureCookieSessionInterface
from .signals import appcontext_tearing_down, got_request_exception, \
    request_finished, request_started, request_tearing_down
from .templating import DispatchingJinjaLoader, Environment, \
    _default_template_ctx_processor
from .wrappers import Request, Response

_sentinel = object()


def _make_timedelta(value):
    if not isinstance(value, timedelta):
        return timedelta(seconds = value)
    return value

def setupmethod(f):
    def wrapper_func(self, *args, **kwargs):
        if self.debug and self._got_first_request:
            raise AssertionError('A setup function was called after the '
                'first request was handled.  This usually indicates a bug '
                'in the application where a module was not imported '
                'and decorators or other functionality was called too late.\n'
                'To fix this make sure to import all your view modules, '
                'database models and everything related at a central place '
                'before the application starts serving requests.')
        return f(self, *args, **kwargs)
    return update_wrapper(wrapper_func, f)

class Flask(_PackageBoundObject):
    #: The class that is used for request objects.  See :class:`~flask.Request`
    #: for more information.
    request_class = Request

    #: The class that is used for response objects.  See
    #: :class:`~flask.Response` for more information.
    response_class = Response

    #: The class that is used for the Jinja environment.
    #:
    #: .. versionadded:: 0.11
    jinja_environment = Environment

    def __init__(
        self,
        import_name,
        static_url_path=None,
        static_folder='static',
        static_host=None,
        host_matching=False,
        subdomain_matching=False,
        template_folder='templates',
        instance_path=None,
        instance_relative_config=False,
        root_path=None
    ):
        _PackageBoundObject.__init__(self,
            import_name,
            template_folder=template_folder,
            root_path=root_path
        )

        if static_url_path is not None:
            self.static_url_path = static_url_path
        
        if static_folder is not None:
            self.static_folder = static_folder
        
        if instance_path is None:
            instance_path = self.auto_find_instance_path()
        elif not os.path.isabs(instance_path):
            raise ValueError( 'If an instance path is provided it must be absolute.'
                ' A relative path was given instead.'
            )
        
        
        
        

