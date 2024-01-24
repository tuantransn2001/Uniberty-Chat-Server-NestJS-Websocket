export enum STATUS_MESSAGE {
  SUCCESS = 'Success',
  CONFLICT = 'Conflict',
  NOT_FOUND = 'Not Found',
  SERVER_ERROR = 'Server Error',
  NO_CONTENT = 'No Content',
  UN_AUTHORIZE = 'Unauthorize',
  BAD_REQUEST = 'Bad Request',
  NOT_ACCEPTABLE = 'Not Acceptable',
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  METHOD_NOT_ALLOW = 'Method Not Allow',
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity Exception',
  MULTIPLE_CHOICES = 'Multiple Choices',
  MOVED_PERMANENTLY = 'Moved Permanently',
  FOUND = 'Found',
  SEE_OTHER = 'See Other',
  NOT_MODIFIED = 'Not Modified',
  USE_PROXY = 'Use Proxy',
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  PERMANENT_REDIRECT = 'Permanent Redirect',
  REQUEST_TIMEOUT = 'Request Timeout',
  LENGTH_REQUIRED = 'Length Required',
  PRECONDITION_FAILED = 'Precondition Failed',
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  URI_TOO_LONG = 'URI Too Long',
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  EXPECTATION_FAILED = 'Expectation Failed',
  IM_A_TEAPOT = "I'm a teapot",
  MISDIRECTED_REQUEST = 'Misdirected Request',
  LOCKED = 'Locked',
  FAILED_DEPENDENCY = 'Failed Dependency',
  TOO_EARLY = 'Too Early',
  UPGRADE_REQUIRED = 'Upgrade Required',
  PRECONDITION_REQUIRED = 'Precondition Required',
  TOO_MANY_REQUESTS = 'Too Many Requests',
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
}

export enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  GONE = 410,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  INTERNAL_SERVER_ERROR = 500,
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  REQUEST_TIMEOUT = 408,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT = 418,
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  TOO_EARLY = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}
