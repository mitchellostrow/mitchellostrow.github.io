document.addEventListener('DOMContentLoaded', function () {
  const albumItems = document.querySelectorAll('.album-item');
  const shuffleButton = document.getElementById('shuffle-button');

  // Fetch album art from Spotify's oEmbed endpoint
  albumItems.forEach(item => {
    const spotifyUrl = item.dataset.spotifyUrl;
    if (spotifyUrl) {
      const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;
      fetch(oembedUrl)
        .then(response => response.json())
        .then(data => {
          const imgElement = item.querySelector('.album-cover');
          if (imgElement && data.thumbnail_url) {
            imgElement.src = data.thumbnail_url;
          }
        })
        .catch(error => console.error('Error fetching Spotify oEmbed data:', error));
    }
  });

  albumItems.forEach(item => {
    const info = item.querySelector('.album-info');
    if (info) {
      info.addEventListener('click', () => {
        // Deactivate all other items
        albumItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle active class on the parent item
        item.classList.toggle('active');
      });
    }
  });

  // Modal logic
  const modal = document.getElementById('album-modal');
  const closeModal = document.querySelector('.close-button');
  const modalAlbumCover = document.getElementById('modal-album-cover');
  const modalAlbumTitle = document.getElementById('modal-album-title');
  const modalAlbumArtist = document.getElementById('modal-album-artist');
  const modalAlbumReview = document.getElementById('modal-album-review');
  const modalSpotifyLink = document.getElementById('modal-spotify-link');

  if (shuffleButton) {
    shuffleButton.addEventListener('click', () => {
      if (typeof albumsData !== 'undefined' && albumsData.length > 0) {
        const randomAlbum = albumsData[Math.floor(Math.random() * albumsData.length)];
        
        // Populate modal
        modalAlbumTitle.textContent = randomAlbum.title;
        modalAlbumArtist.textContent = randomAlbum.artist;
        modalAlbumReview.textContent = randomAlbum.review;
        modalSpotifyLink.href = randomAlbum.spotify_url;

        // Fetch album art
        const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(randomAlbum.spotify_url)}`;
        fetch(oembedUrl)
          .then(response => response.json())
          .then(data => {
            if (data.thumbnail_url) {
              modalAlbumCover.src = data.thumbnail_url;
            }
          })
          .catch(error => console.error('Error fetching Spotify oEmbed data:', error));
        
        // Show modal
        modal.style.display = 'block';
      }
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}); 