// source: google/api/documentation.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.api.Documentation', null, global);
goog.exportSymbol('proto.google.api.DocumentationRule', null, global);
goog.exportSymbol('proto.google.api.Page', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Documentation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Documentation.repeatedFields_, null);
};
goog.inherits(proto.google.api.Documentation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Documentation.displayName = 'proto.google.api.Documentation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.DocumentationRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.DocumentationRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.DocumentationRule.displayName = 'proto.google.api.DocumentationRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Page = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Page.repeatedFields_, null);
};
goog.inherits(proto.google.api.Page, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Page.displayName = 'proto.google.api.Page';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Documentation.repeatedFields_ = [5,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Documentation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Documentation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Documentation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Documentation.toObject = function(includeInstance, msg) {
  var f, obj = {
    summary: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagesList: jspb.Message.toObjectList(msg.getPagesList(),
    proto.google.api.Page.toObject, includeInstance),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.DocumentationRule.toObject, includeInstance),
    documentationRootUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    serviceRootUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    overview: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Documentation}
 */
proto.google.api.Documentation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Documentation;
  return proto.google.api.Documentation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Documentation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Documentation}
 */
proto.google.api.Documentation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 5:
      var value = new proto.google.api.Page;
      reader.readMessage(value,proto.google.api.Page.deserializeBinaryFromReader);
      msg.addPages(value);
      break;
    case 3:
      var value = new proto.google.api.DocumentationRule;
      reader.readMessage(value,proto.google.api.DocumentationRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentationRootUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceRootUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOverview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Documentation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Documentation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Documentation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Documentation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.api.Page.serializeBinaryToWriter
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.api.DocumentationRule.serializeBinaryToWriter
    );
  }
  f = message.getDocumentationRootUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getServiceRootUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOverview();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string summary = 1;
 * @return {string}
 */
proto.google.api.Documentation.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Documentation} returns this
 */
proto.google.api.Documentation.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Page pages = 5;
 * @return {!Array<!proto.google.api.Page>}
 */
proto.google.api.Documentation.prototype.getPagesList = function() {
  return /** @type{!Array<!proto.google.api.Page>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.Page, 5));
};


/**
 * @param {!Array<!proto.google.api.Page>} value
 * @return {!proto.google.api.Documentation} returns this
*/
proto.google.api.Documentation.prototype.setPagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.api.Page=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.Page}
 */
proto.google.api.Documentation.prototype.addPages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.api.Page, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Documentation} returns this
 */
proto.google.api.Documentation.prototype.clearPagesList = function() {
  return this.setPagesList([]);
};


/**
 * repeated DocumentationRule rules = 3;
 * @return {!Array<!proto.google.api.DocumentationRule>}
 */
proto.google.api.Documentation.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.google.api.DocumentationRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.DocumentationRule, 3));
};


/**
 * @param {!Array<!proto.google.api.DocumentationRule>} value
 * @return {!proto.google.api.Documentation} returns this
*/
proto.google.api.Documentation.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.api.DocumentationRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.DocumentationRule}
 */
proto.google.api.Documentation.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.api.DocumentationRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Documentation} returns this
 */
proto.google.api.Documentation.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * optional string documentation_root_url = 4;
 * @return {string}
 */
proto.google.api.Documentation.prototype.getDocumentationRootUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Documentation} returns this
 */
proto.google.api.Documentation.prototype.setDocumentationRootUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string service_root_url = 6;
 * @return {string}
 */
proto.google.api.Documentation.prototype.getServiceRootUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Documentation} returns this
 */
proto.google.api.Documentation.prototype.setServiceRootUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string overview = 2;
 * @return {string}
 */
proto.google.api.Documentation.prototype.getOverview = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Documentation} returns this
 */
proto.google.api.Documentation.prototype.setOverview = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.DocumentationRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.DocumentationRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.DocumentationRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.DocumentationRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deprecationDescription: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.DocumentationRule}
 */
proto.google.api.DocumentationRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.DocumentationRule;
  return proto.google.api.DocumentationRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.DocumentationRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.DocumentationRule}
 */
proto.google.api.DocumentationRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeprecationDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.DocumentationRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.DocumentationRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.DocumentationRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.DocumentationRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeprecationDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.DocumentationRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.DocumentationRule} returns this
 */
proto.google.api.DocumentationRule.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.api.DocumentationRule.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.DocumentationRule} returns this
 */
proto.google.api.DocumentationRule.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deprecation_description = 3;
 * @return {string}
 */
proto.google.api.DocumentationRule.prototype.getDeprecationDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.DocumentationRule} returns this
 */
proto.google.api.DocumentationRule.prototype.setDeprecationDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Page.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Page.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Page.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Page} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Page.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subpagesList: jspb.Message.toObjectList(msg.getSubpagesList(),
    proto.google.api.Page.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Page}
 */
proto.google.api.Page.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Page;
  return proto.google.api.Page.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Page} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Page}
 */
proto.google.api.Page.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = new proto.google.api.Page;
      reader.readMessage(value,proto.google.api.Page.deserializeBinaryFromReader);
      msg.addSubpages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Page.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Page.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Page} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Page.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubpagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.api.Page.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.api.Page.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Page} returns this
 */
proto.google.api.Page.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.google.api.Page.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Page} returns this
 */
proto.google.api.Page.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Page subpages = 3;
 * @return {!Array<!proto.google.api.Page>}
 */
proto.google.api.Page.prototype.getSubpagesList = function() {
  return /** @type{!Array<!proto.google.api.Page>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.Page, 3));
};


/**
 * @param {!Array<!proto.google.api.Page>} value
 * @return {!proto.google.api.Page} returns this
*/
proto.google.api.Page.prototype.setSubpagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.api.Page=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.Page}
 */
proto.google.api.Page.prototype.addSubpages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.api.Page, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Page} returns this
 */
proto.google.api.Page.prototype.clearSubpagesList = function() {
  return this.setSubpagesList([]);
};


goog.object.extend(exports, proto.google.api);
