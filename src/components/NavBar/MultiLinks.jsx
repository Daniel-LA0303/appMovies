import React from 'react'
import useCategories from '../../hooks/useCategories';

// const {isLoadingCat, genresMovies, genresTV} = useCategories()
// console.log(genresMovies);

export const links = [
    {
      name: "Movies",
      submenu: true,
      sublinks: [
        {
          Head: "Populare",
          linkHead: "/",
          sublinkBoolean: false,
          sublink: [],
        },
        {
          Head: "Comming Soon",
          linkHead: "/",
          sublinkBoolean: false,
          sublink: [],
        },    
      ],
    },
    {
      name: "TV shows",
      submenu: true,
      sublinks: [
        {
          Head: "Populare",
          linkHead: "/",
          sublinkBoolean: false,
          sublink: [],
        },
        {
          Head: "New Series",
          linkHead: "/",
          sublinkBoolean: false,
          sublink: [],
        },    
      ],
    },
    {
      name: "Categories",
      submenu: true,
      sublinks: [
        {
          Head: "Categories Movies",
          linkHead: "/",
          sublinkBoolean: true,
          sublink: [
            { name: "T-shirt", link: "/Action & Adventure" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Categories TV Shows",
          linkHead: "/",
          sublinkBoolean: true,
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
  ];
  