import _ from 'lodash';

var ShowcaseDataFactory = function () {};

ShowcaseDataFactory.prototype.generateUniqueId = function () {
    this.lastUsedId = this.lastUsedId || 0;
    this.lastUsedId += 1;
    return this.lastUsedId;
};

ShowcaseDataFactory.prototype.buildShowcase = function (params) {
    var defaultShowcase = {
        id: this.generateUniqueId(),
        tabs: []
    }
    return params ? _.extend(defaultShowcase, params): defaultShowcase;
};

ShowcaseDataFactory.prototype.buildTab = function (params) {
    var defaultTab = {
        id: this.generateUniqueId(),
        resources: [],
    }
    return params ? _.extend(defaultTab, params) : defaultTab;
};

ShowcaseDataFactory.prototype.buildTabResource = function (params) {
    var objectID = String(this.generateUniqueId()) // почему-то это строка
    var defaultResource = {
        id: this.generateUniqueId(),
    };
    return params ? _.extend(defaultResource, params) : defaultResource;
};

ShowcaseDataFactory.prototype.buildResource = function (params) {
    var defaultResource = {
        results: []
    }
    return params ? _.extend(defaultResource, params) : defaultResource;
};

ShowcaseDataFactory.prototype.buildTagResourceResult = function (params) {
    return this.buildVideoData(params);
};

ShowcaseDataFactory.prototype.buildVideoCardResult = function (params) {
    var videoData = this.buildVideoData(params.video);

    var defaultResult = {
        id: this.generateUniqueId(),
        message: 'some message',
        posting_ts: timestamp,
        last_poster: author,
        video: videoData
    };

    return params ? _.extend(defaultResult, params) : defaultResult;
};

ShowcaseDataFactory.prototype.buildVideoData = function (params) {
    var defaultResult = {
        id: this.generateUniqueId(),
    };
    return params ? _.extend(defaultResult, params) : defaultResult;
};


ShowcaseDataFactory.prototype.buildTabResourceWithResults = function (num, tabResource) {
    if (!tabResource) {
        tabResource = this.buildTabResource();
    }

    _.extend(tabResource, this.buildResource());

    _.times(num, function(){
        tabResource.results.push(this.buildTagResourceResult());
    }.bind(this));

    return tabResource;
};

export default new ShowcaseDataFactory();
