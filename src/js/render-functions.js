export function renderImages(input) {
  return input.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li>
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
      <div class="text-div">
        <p>
          <b>Likes</b><br>${likes}
        </p>
        <p>
          <b>Views</b><br>${views}
        </p>
        <p>
          <b>Comments</b><br>${comments}
        </p>
        <p>
          <b>Downloads</b><br>${downloads}
        </p>
      </div>
    </a>
  </li>
  `
    )
    .join('');
}
