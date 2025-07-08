document.addEventListener('DOMContentLoaded', function () {
  console.log('Music script loaded. DOM is ready.');

  const albumItems = document.querySelectorAll('.album-item');
  const shuffleButton = document.getElementById('shuffle-button');
  console.log(`Found ${albumItems.length} album items.`);
  console.log(shuffleButton ? 'Shuffle button found.' : 'Shuffle button NOT found.');

  // Fetch album art from Spotify's oEmbed endpoint
  albumItems.forEach((item, index) => {
    const spotifyUrl = item.dataset.spotifyUrl;
    console.log(`Album ${index}: Processing Spotify URL: ${spotifyUrl}`);
    if (spotifyUrl) {
      const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;
      fetch(oembedUrl)
        .then(response => response.json())
        .then(data => {
          const imgElement = item.querySelector('.album-cover');
          if (imgElement && data.thumbnail_url) {
            console.log(`Album ${index}: Found thumbnail, setting image src.`);
            imgElement.src = data.thumbnail_url;
          } else {
            console.warn(`Album ${index}: Could not find thumbnail in Spotify data.`, data);
          }
        })
        .catch(error => console.error(`Album ${index}: Error fetching Spotify oEmbed data:`, error));
    }
  });

  albumItems.forEach(item => {
    const info = item.querySelector('.album-info');
    if (info) {
      info.addEventListener('click', () => {
        console.log('Album info clicked:', item);
        const isActive = item.classList.contains('active');
        console.log(`Album was ${isActive ? 'active' : 'inactive'}. Toggling active class.`);
        // Deactivate all other items
        albumItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle active class on the parent item
        item.classList.toggle('active');
      });
    } else {
      console.warn('Could not find .album-info for item:', item);
    }
  });

  // Modal logic
  const modal = document.getElementById('album-modal');
  const closeModal = document.querySelector('.close-button');
  console.log(modal ? 'Modal found.' : 'Modal NOT found.');
  console.log(closeModal ? 'Close button found.' : 'Close button NOT found.');

  const modalAlbumCover = document.getElementById('modal-album-cover');
  const modalAlbumTitle = document.getElementById('modal-album-title');
  const modalAlbumArtist = document.getElementById('modal-album-artist');
  const modalAlbumReview = document.getElementById('modal-album-review');
  const modalSpotifyLink = document.getElementById('modal-spotify-link');

  if (shuffleButton) {
    shuffleButton.addEventListener('click', () => {
      console.log('Shuffle button clicked.');
      if (typeof albumsData !== 'undefined' && albumsData.length > 0) {
        console.log('Album data is available:', albumsData);
        const randomAlbum = albumsData[Math.floor(Math.random() * albumsData.length)];
        console.log('Selected random album:', randomAlbum);
        
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
              console.log('Album art found, setting modal image src.');
              modalAlbumCover.src = data.thumbnail_url;
            } else {
              console.warn('Album art not found in Spotify data:', data);
            }
          })
          .catch(error => console.error('Error fetching Spotify oEmbed data:', error));
        
        // Show modal
        modal.style.display = 'block';
        console.log('Modal display set to "block".');
      } else {
        console.error('Shuffle clicked, but albumsData is not available or empty.');
      }
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      console.log('Close button clicked.');
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      console.log('Clicked outside modal.');
      modal.style.display = 'none';
    }
  });
}); 