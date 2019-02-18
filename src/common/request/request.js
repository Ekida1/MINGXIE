import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

function getonStagePhotosListData() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/onstage.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getoffStagePhotosListData() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/offstage.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getVisonPhotosListData() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/vision.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getNewsListData() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/news.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getDetailData(id) {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/detail" + id + ".json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getReviewsListData() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/reviews.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

function getAboutText() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/about.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res)
      },
      err => {
        reject(err)
      }
    );
  });
}

function getConcertsInfo() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/concerts.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res)
      },
      err => {
        reject(err)
      }
    );
  });
}

function getMusicFile() {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "./static/mock/music.json",
      methods: "GET"
    }).then(
      res => {
        res = res.body;
        resolve(res)
      },
      err => {
        reject(err)
      }
    );
  });
}
export {
  getonStagePhotosListData,
  getoffStagePhotosListData,
  getVisonPhotosListData,
  getNewsListData,
  getDetailData,
  getReviewsListData,
  getAboutText,
  getConcertsInfo,
  getMusicFile
}
