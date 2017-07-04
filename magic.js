new Vue({
  el: '#radiomax',
  data: {
    show: false,
    showInfo: false,
    channelInfo: [
      {
        image: '',
        title: '',
        description: '',
        next: '',
        play: '',
        id: 'channel1',
        hidden: true
      }, {
        image: '',
        title: '',
        description: '',
        next: '',
        play: '',
        id: 'channel2',
        hidden: false
      }, {
        image: '',
        title: '',
        description: '',
        next: '',
        play: '',
        id: 'channel3',
        hidden: false
      }, {
        image: '',
        title: '',
        description: '',
        next: '',
        play: '',
        id: 'channel4',
        hidden: false
      }
    ]
  },
  created() {
    axios.get('http://api.sr.se/api/v2/scheduledepisodes/rightnow/channelid=132?format=json&page=2').then(response => {
      this.results = response.data.channels;
      this.channelInfo[0].image = response.data.channels[5].currentscheduledepisode.socialimage,
      this.channelInfo[0].title = response.data.channels[5].currentscheduledepisode.title,
      this.channelInfo[0].description = response.data.channels[5].currentscheduledepisode.description;
      this.channelInfo[0].next = response.data.channels[5].nextscheduledepisode.title;
      this.channelInfo[1].image = response.data.channels[6].currentscheduledepisode.socialimage,
      this.channelInfo[1].title = response.data.channels[6].currentscheduledepisode.title,
      this.channelInfo[1].description = response.data.channels[6].currentscheduledepisode.description;
      this.channelInfo[1].next = response.data.channels[6].nextscheduledepisode.title;
    });
    axios.get('http://api.sr.se/api/v2/scheduledepisodes/rightnow/channelid=132?format=json&page=3').then(response => {
      this.channelInfo[2].image = response.data.channels[2].currentscheduledepisode.socialimage,
      this.channelInfo[2].title = response.data.channels[2].currentscheduledepisode.title,
      this.channelInfo[2].description = response.data.channels[2].currentscheduledepisode.description;
      this.channelInfo[2].next = response.data.channels[2].nextscheduledepisode.title;
    });
    axios.get('http://api.sr.se/api/v2/scheduledepisodes/rightnow/channelid=132?format=json&page=4').then(response => {
      this.channelInfo[3].image = response.data.channels[0].currentscheduledepisode.socialimage,
      this.channelInfo[3].title = response.data.channels[0].currentscheduledepisode.title,
      this.channelInfo[3].description = response.data.channels[0].currentscheduledepisode.description;
      this.channelInfo[3].next = response.data.channels[0].nextscheduledepisode.title;

    });
    axios.get('http://api.sr.se/api/v2/channels?format=json').then(response => {
      this.channelInfo[0].play = response.data.channels[0].liveaudio.url;
      this.channelInfo[1].play = response.data.channels[1].liveaudio.url;
      this.channelInfo[2].play = response.data.channels[2].liveaudio.url;
      this.channelInfo[3].play = response.data.channels[7].liveaudio.url;
      this.show = true;
    });
  },
  methods: {
    hideAndShow(current) {
      for (let i = 0; i < this.channelInfo.length; i++) {
        if (current) {
          this.channelInfo[i].hidden = false;
        } else if (current == 0) {
          this.channelInfo[i].hidden = false;
        }
        this.channelInfo[current].hidden = true;
      }
      this.fetchData();
    },
    fetchData() {
      axios.get('http://api.sr.se/api/v2/scheduledepisodes/rightnow/channelid=132?format=json&page=2').then(response => {
        this.results = response.data.channels;
        this.channelInfo[0].image = response.data.channels[5].currentscheduledepisode.socialimage,
        this.channelInfo[0].title = response.data.channels[5].currentscheduledepisode.title,
        this.channelInfo[0].description = response.data.channels[5].currentscheduledepisode.description;
        this.channelInfo[0].next = response.data.channels[5].nextscheduledepisode.title;
        this.channelInfo[1].image = response.data.channels[6].currentscheduledepisode.socialimage,
        this.channelInfo[1].title = response.data.channels[6].currentscheduledepisode.title,
        this.channelInfo[1].description = response.data.channels[6].currentscheduledepisode.description;
        this.channelInfo[1].next = response.data.channels[6].nextscheduledepisode.title;
      });
      axios.get('http://api.sr.se/api/v2/scheduledepisodes/rightnow/channelid=132?format=json&page=3').then(response => {
        this.channelInfo[2].image = response.data.channels[2].currentscheduledepisode.socialimage,
        this.channelInfo[2].title = response.data.channels[2].currentscheduledepisode.title,
        this.channelInfo[2].description = response.data.channels[2].currentscheduledepisode.description;
        this.channelInfo[2].next = response.data.channels[2].nextscheduledepisode.title;
      });
      axios.get('http://api.sr.se/api/v2/scheduledepisodes/rightnow/channelid=132?format=json&page=4').then(response => {
        this.channelInfo[3].image = response.data.channels[0].currentscheduledepisode.socialimage,
        this.channelInfo[3].title = response.data.channels[0].currentscheduledepisode.title,
        this.channelInfo[3].description = response.data.channels[0].currentscheduledepisode.description;
        this.channelInfo[3].next = response.data.channels[0].nextscheduledepisode.title;

      });
      axios.get('http://api.sr.se/api/v2/channels?format=json').then(response => {
        this.snopp = response.data.channels;
        this.channelInfo[0].play = response.data.channels[0].liveaudio.url;
        this.channelInfo[1].play = response.data.channels[1].liveaudio.url;
        this.channelInfo[2].play = response.data.channels[2].liveaudio.url;
        this.channelInfo[3].play = response.data.channels[7].liveaudio.url;
        this.show = true;
      });
    },
    hello() {
      alert('JOISAK RADIO MAX!!! Välj din favoritkanal och bara kör!');
    }
  }
});

// Background color and fade in
var windowHeight = window.outerHeight,
  bg = document.getElementById('wrapper');
bg.style.height = windowHeight + "px";
bg.className = " fade";
