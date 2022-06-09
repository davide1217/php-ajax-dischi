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

      selectValue: 'All',
      
      selectAuthor: 'All',
  },

  computed: {
    albumsFiltered() {

      return  this.albums.filter(this.albumsFilter)

    }
  },

  mounted() {
    this.getApi();
  },

  methods: {

    filterGenre(genre) {
      this.activeGenre = genre;
    },

    filterAuthor(author) {
      this.activeAuthor = author;
    },

    getApi() {
      axios.get(this.apiUrl)
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

    albumsFilter(album) {
      
      if(this.activeGenre != 'All' && this.activeAuthor != 'All') {
        return album.genre == this.activeGenre && album.author == this.activeAuthor
      }
       else if(this.activeGenre != 'All' || this.activeAuthor != 'All') {
        return album.genre == this.activeGenre || album.author == this.activeAuthor
      }
       else {
        return album == album
      }
    }
  }
})
