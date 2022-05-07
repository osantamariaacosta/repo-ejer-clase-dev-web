var innerCarousel = document.getElementById('mainCarousel');
var itemContainer = document.createElement('div');
itemContainer.classList.add('carousel-item');
itemContainer.classList.add('active');
itemContainer.classList.add('bg-danger');
itemContainer.classList.add('text-center');
var itemRow = document.createElement('div');
itemRow.classList.add('row');
itemRow.classList.add('px-5');
itemRow.classList.add('py-5');
itemContainer.appendChild(itemRow);
innerCarousel.appendChild(itemContainer);





