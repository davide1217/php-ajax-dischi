const app = new Vue ({
  el: '#app',
  data: {
    apiUrl: 'https://flynn.boolean.careers/exercises/api/array/music',

      albums: [],

      albumsGenre: [],

      albumsAuthors: [],

      isLoaded: false,

      activeGenre: 'All',

      activeAuthor: 'All',

      selectValue: 'All',
      
      selectAuthor: 'All',
  },

  computed() {
    albumsFiltered();
  },

  methods: {
    albumsFiltered() {

      return  this.albums.filter(this.albumsFilter)

    },

    filterGenre(genre) {
      this.activeGenre = genre;
    },

    filterAuthor(author) {
      this.activeAuthor = author;
    },

    getApi() {
      axios.get(this.apiUrl)
        .then(file => {
          this.albums = file.data.response;
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
