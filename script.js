const app = new Vue ({
  el: '#app',
  data: {
    apiUrl: 'http://localhost:8888/php-ajax-dischi/api.php',

      albums: [],

      albumsGenre: [],

      albumsAuthors: [],

      isLoaded: false,

      activeGenre: 'All',

      activeAuthor: 'All',

  },

  computed: {
    
  },

  mounted() {
    this.getApi();
  },

  methods: {

    getApi() {
      this.albums = [],

      axios.get(this.apiUrl + `?genre=${this.activeGenre}&author=${this.activeAuthor}`)
        .then(file => {
          this.albums = file.data;
          this.isLoaded = true;
          this.getAlbumsGenre();
          this.getAlbumsAuthors();
        })
    },

    getAlbumsGenre() {

      for (const album of this.albums) {
        
        if (!this.albumsGenre.includes(album.genre)) {
          this.albumsGenre.push(album.genre)
        }
      }
    },

    getAlbumsAuthors() {

      for (const album of this.albums) {
  
        if (!this.albumsAuthors.includes(album.author)) {
          this.albumsAuthors.push(album.author)
        }
      }
    },

  }
})
