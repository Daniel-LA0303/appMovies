import React from 'react'
import useCategories from '../../hooks/useCategories';

// const {isLoadingCat, genresMovies, genresTV} = useCategories()
// console.log(genresMovies);

export const links = [
    {
      name: "Movies",
      linkName: "/movies",
      submenu: false,
      sublinks: [
        {
          Head: "Populare",
          linkHead: "/movies-popular",
          sublinkBoolean: false,
          sublink: [],
        },
        {
          Head: "Comming Soon",
          linkHead: "/movies-comming-soon",
          sublinkBoolean: false,
          sublink: [],
        },    
      ],
    },
    {
      name: "TV shows",
      linkName: "/series",
      submenu: false,
      sublinks: [
        {
          Head: "Populare",
          linkHead: "/series-popular",
          sublinkBoolean: false,
          sublink: [],
        },
        {
          Head: "New Series",
          linkHead: "/new-series",
          sublinkBoolean: false,
          sublink: [],
        },    
      ],
    },
    // {
    //   name: "Categories",
    //   linkName: "/categories",
    //   submenu: true,
    //   sublinks: [
    //     {
    //       Head: "Categories Movies",
    //       linkHead: "/categories-movies",
    //       sublinkBoolean: true,
    //       subLinkMovie: true,
    //       sublink: [
    //         { name: "Animation", link: "/Animation" },
    //         { name: "Comedy", link: "/Comedy" },
    //         { name: "Crime", link: "/Crime" },
    //         { name: "Drama", link: "/Drama" },
    //         { name: "Family", link: "/Family" },
    //         { name: "Fantasy", link: "/Fantasy" },
    //         { name: "History", link: "/History" },
    //         { name: "Horror", link: "/Horror" },
    //         { name: "Music", link: "/Music" },
    //         { name: "Mystery", link: "/Mystery" },
    //         { name: "Romance", link: "/Romance" },
    //         { name: "Science Fiction", link: "/Science Fiction" },
    //         { name: "War", link: "/War" },
    //         { name: "Western", link: "/Western" },
    //       ],
    //     },
    //     {
    //       Head: "Categories TV Shows",
    //       linkHead: "/categories-series",
    //       sublinkBoolean: true,
    //       subLinkMovie: false,
    //       sublink: [
    //         { name: "Animation", link: "/Animation" },
    //         { name: "Comedy", link: "/Comedy" },
    //         { name: "Crime", link: "/Crime" },
    //         { name: "Drama", link: "/Drama" },
    //         { name: "Family", link: "/Family" },
    //         { name: "Kids", link: "/Kids" },
    //         { name: "News", link: "/News" },
    //         { name: "Reality", link: "/Reality" },
    //         { name: "Soap", link: "/Soap" },
    //         { name: "Western", link: "/Western" },
    //       ],
    //     },
    //   ],
    // },
  ];
  