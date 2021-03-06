/**
 * @fileoverview gRPC-Web generated client stub for sources
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.sources = require('./sources_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sources.SourcesServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sources.SourcesServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.GetSourcesListRequest,
 *   !proto.sources.GetSourcesListResponse>}
 */
const methodDescriptor_SourcesService_GetSourcesList = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/GetSourcesList',
  grpc.web.MethodType.UNARY,
  proto.sources.GetSourcesListRequest,
  proto.sources.GetSourcesListResponse,
  /**
   * @param {!proto.sources.GetSourcesListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.GetSourcesListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.GetSourcesListRequest,
 *   !proto.sources.GetSourcesListResponse>}
 */
const methodInfo_SourcesService_GetSourcesList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.GetSourcesListResponse,
  /**
   * @param {!proto.sources.GetSourcesListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.GetSourcesListResponse.deserializeBinary
);


/**
 * @param {!proto.sources.GetSourcesListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.GetSourcesListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.GetSourcesListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.getSourcesList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/GetSourcesList',
      request,
      metadata || {},
      methodDescriptor_SourcesService_GetSourcesList,
      callback);
};


/**
 * @param {!proto.sources.GetSourcesListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.GetSourcesListResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.getSourcesList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/GetSourcesList',
      request,
      metadata || {},
      methodDescriptor_SourcesService_GetSourcesList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.GetSourceByIdRequest,
 *   !proto.sources.GetSourceByIdResponse>}
 */
const methodDescriptor_SourcesService_GetSourceById = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/GetSourceById',
  grpc.web.MethodType.UNARY,
  proto.sources.GetSourceByIdRequest,
  proto.sources.GetSourceByIdResponse,
  /**
   * @param {!proto.sources.GetSourceByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.GetSourceByIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.GetSourceByIdRequest,
 *   !proto.sources.GetSourceByIdResponse>}
 */
const methodInfo_SourcesService_GetSourceById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.GetSourceByIdResponse,
  /**
   * @param {!proto.sources.GetSourceByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.GetSourceByIdResponse.deserializeBinary
);


/**
 * @param {!proto.sources.GetSourceByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.GetSourceByIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.GetSourceByIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.getSourceById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/GetSourceById',
      request,
      metadata || {},
      methodDescriptor_SourcesService_GetSourceById,
      callback);
};


/**
 * @param {!proto.sources.GetSourceByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.GetSourceByIdResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.getSourceById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/GetSourceById',
      request,
      metadata || {},
      methodDescriptor_SourcesService_GetSourceById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.SearchSourcesRequest,
 *   !proto.sources.SearchSourcesResponse>}
 */
const methodDescriptor_SourcesService_SearchSources = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/SearchSources',
  grpc.web.MethodType.UNARY,
  proto.sources.SearchSourcesRequest,
  proto.sources.SearchSourcesResponse,
  /**
   * @param {!proto.sources.SearchSourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SearchSourcesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.SearchSourcesRequest,
 *   !proto.sources.SearchSourcesResponse>}
 */
const methodInfo_SourcesService_SearchSources = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.SearchSourcesResponse,
  /**
   * @param {!proto.sources.SearchSourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SearchSourcesResponse.deserializeBinary
);


/**
 * @param {!proto.sources.SearchSourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.SearchSourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.SearchSourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.searchSources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/SearchSources',
      request,
      metadata || {},
      methodDescriptor_SourcesService_SearchSources,
      callback);
};


/**
 * @param {!proto.sources.SearchSourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.SearchSourcesResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.searchSources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/SearchSources',
      request,
      metadata || {},
      methodDescriptor_SourcesService_SearchSources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.SubscribeRequest,
 *   !proto.sources.SubscribeResponse>}
 */
const methodDescriptor_SourcesService_Subscribe = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/Subscribe',
  grpc.web.MethodType.UNARY,
  proto.sources.SubscribeRequest,
  proto.sources.SubscribeResponse,
  /**
   * @param {!proto.sources.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SubscribeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.SubscribeRequest,
 *   !proto.sources.SubscribeResponse>}
 */
const methodInfo_SourcesService_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.SubscribeResponse,
  /**
   * @param {!proto.sources.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SubscribeResponse.deserializeBinary
);


/**
 * @param {!proto.sources.SubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.SubscribeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.SubscribeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.subscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/Subscribe',
      request,
      metadata || {},
      methodDescriptor_SourcesService_Subscribe,
      callback);
};


/**
 * @param {!proto.sources.SubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.SubscribeResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/Subscribe',
      request,
      metadata || {},
      methodDescriptor_SourcesService_Subscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.UnsubscribeRequest,
 *   !proto.sources.UnsubscribeResponse>}
 */
const methodDescriptor_SourcesService_Unsubscribe = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/Unsubscribe',
  grpc.web.MethodType.UNARY,
  proto.sources.UnsubscribeRequest,
  proto.sources.UnsubscribeResponse,
  /**
   * @param {!proto.sources.UnsubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.UnsubscribeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.UnsubscribeRequest,
 *   !proto.sources.UnsubscribeResponse>}
 */
const methodInfo_SourcesService_Unsubscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.UnsubscribeResponse,
  /**
   * @param {!proto.sources.UnsubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.UnsubscribeResponse.deserializeBinary
);


/**
 * @param {!proto.sources.UnsubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.UnsubscribeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.UnsubscribeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.unsubscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/Unsubscribe',
      request,
      metadata || {},
      methodDescriptor_SourcesService_Unsubscribe,
      callback);
};


/**
 * @param {!proto.sources.UnsubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.UnsubscribeResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.unsubscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/Unsubscribe',
      request,
      metadata || {},
      methodDescriptor_SourcesService_Unsubscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.MoveToFolderRequest,
 *   !proto.sources.MoveToFolderResponse>}
 */
const methodDescriptor_SourcesService_MoveToFolder = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/MoveToFolder',
  grpc.web.MethodType.UNARY,
  proto.sources.MoveToFolderRequest,
  proto.sources.MoveToFolderResponse,
  /**
   * @param {!proto.sources.MoveToFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.MoveToFolderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.MoveToFolderRequest,
 *   !proto.sources.MoveToFolderResponse>}
 */
const methodInfo_SourcesService_MoveToFolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.MoveToFolderResponse,
  /**
   * @param {!proto.sources.MoveToFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.MoveToFolderResponse.deserializeBinary
);


/**
 * @param {!proto.sources.MoveToFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.MoveToFolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.MoveToFolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.moveToFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/MoveToFolder',
      request,
      metadata || {},
      methodDescriptor_SourcesService_MoveToFolder,
      callback);
};


/**
 * @param {!proto.sources.MoveToFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.MoveToFolderResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.moveToFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/MoveToFolder',
      request,
      metadata || {},
      methodDescriptor_SourcesService_MoveToFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.SearchTagsRequest,
 *   !proto.sources.SearchTagsResponse>}
 */
const methodDescriptor_SourcesService_SearchTags = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/SearchTags',
  grpc.web.MethodType.UNARY,
  proto.sources.SearchTagsRequest,
  proto.sources.SearchTagsResponse,
  /**
   * @param {!proto.sources.SearchTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SearchTagsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.SearchTagsRequest,
 *   !proto.sources.SearchTagsResponse>}
 */
const methodInfo_SourcesService_SearchTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.SearchTagsResponse,
  /**
   * @param {!proto.sources.SearchTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SearchTagsResponse.deserializeBinary
);


/**
 * @param {!proto.sources.SearchTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.SearchTagsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.SearchTagsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.searchTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/SearchTags',
      request,
      metadata || {},
      methodDescriptor_SourcesService_SearchTags,
      callback);
};


/**
 * @param {!proto.sources.SearchTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.SearchTagsResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.searchTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/SearchTags',
      request,
      metadata || {},
      methodDescriptor_SourcesService_SearchTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sources.SetSourceTagsRequest,
 *   !proto.sources.SetSourceTagsResponse>}
 */
const methodDescriptor_SourcesService_SetSourceTags = new grpc.web.MethodDescriptor(
  '/sources.SourcesService/SetSourceTags',
  grpc.web.MethodType.UNARY,
  proto.sources.SetSourceTagsRequest,
  proto.sources.SetSourceTagsResponse,
  /**
   * @param {!proto.sources.SetSourceTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SetSourceTagsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sources.SetSourceTagsRequest,
 *   !proto.sources.SetSourceTagsResponse>}
 */
const methodInfo_SourcesService_SetSourceTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sources.SetSourceTagsResponse,
  /**
   * @param {!proto.sources.SetSourceTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sources.SetSourceTagsResponse.deserializeBinary
);


/**
 * @param {!proto.sources.SetSourceTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sources.SetSourceTagsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sources.SetSourceTagsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sources.SourcesServiceClient.prototype.setSourceTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sources.SourcesService/SetSourceTags',
      request,
      metadata || {},
      methodDescriptor_SourcesService_SetSourceTags,
      callback);
};


/**
 * @param {!proto.sources.SetSourceTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sources.SetSourceTagsResponse>}
 *     Promise that resolves to the response
 */
proto.sources.SourcesServicePromiseClient.prototype.setSourceTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sources.SourcesService/SetSourceTags',
      request,
      metadata || {},
      methodDescriptor_SourcesService_SetSourceTags);
};


module.exports = proto.sources;

