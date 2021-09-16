const posts = {
    list:[
        {
         id: 1,
         image: "../../images/sauvignonBlanc.jpeg",
         description: "Blanco Sauvignon",
         brand: "New Zeland",
         manufactureDate: 2018,
         brand_id: 1,
         brandUser: {id:1, username: `@newzeland`, brandname:`Vinos New Zeland`},
         likes: 1444,
         comments:[
            { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2 },
            { content: `WOW`, date: new Date (2021, 9, 8), likes: 9 },
            { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90 },
            { content: `!!!`, date: new Date (2021, 9, 15), likes: 54 }
         ]
        },
        {
            id: 2,
            image:"../../images/swartland.jpg",
            description: "Tinto",
            brand: "Swartland",
            manufactureDate: 2014,
            brand_id: 2,
            brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`},
            likes: 1444,
            comments:[
               { content: `Quiero una copa!`, date: new Date (2021, 4, 15), likes: 6 },
               { content: `Me gustaría comprarme unos cuantos`, date: new Date (2021, 3, 15), likes: 9 },
               { content: `Donde se encuentran?`, date: new Date (2021, 9, 12), likes: 90 },
            ]
           },
           {
            id: 3,
            image:"../../images/viñamaipo.jpeg",
            description: "Blanco Sauvignon",
            brand: "Viña Maipo",
            manufactureDate: 2012,
            brand_id: 3,
            brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`},
            likes: 1444,
            comments:[
               { content: `:)`, date: new Date (2021, 3, 4), likes: 5 },
               { content: `Woww`, date: new Date (2021, 7, 14), likes: 30 },
               { content: `MMmmm`, date: new Date (2021, 2, 1), likes: 20 },
               { content: `Quiero una copa entera!!`, date: new Date (2021, 2, 27), likes: 25 }
            ]
           },
           {
            id: 4,
            image:"../../images/palaciodemenadi.jpeg",
            description: "Blanco",
            brand: "Palacio de Menadi",
            manufactureDate: 2013,
            brand_id: 4,
            brandUser: {id:1, username: `@vinosemilia`, brandname:`Vinos Emilia`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
           {
            id: 5,
            image:"../../images/jacobscreekreserva.jpeg",
            description: "Tinto Shiraz",
            brand: "Jacob´s Creek",
            manufactureDate: 2017,
            brand_id: 5,
            brandUser: {id:1, username: `@reservajacobscreek`, brandname:`Reserva Jacobs Creek`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
           {
            id: 6,
            image:"../../images/grandbarossa.jpeg",
            description: "Tinto Shiraz",
            brand: "Gran Barossa",
            manufactureDate: 2017,
            brand_id: 6,
            brandUser: {id:1, username: `@vinosgranbarossa`, brandname:`Vinos Gran Barossa`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
           {
            id: 7,
            image:"../../images/elephantintheroom.jpeg",
            description: "Cabernet Sauvignon",
            brand: "Elephant in the Room",
            manufactureDate: 2019,
            brand_id: 7,
            brandUser: {id:1, username: `@elephantintheroom`, brandname:`Vinos Elephant`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
           {
            id: 8,
            image:"../../images/domeniilleblac.jpeg",
            description: "Cabernet Sauvignon",
            brand: "Domeniile Blaga",
            manufactureDate: 2019,
            brand_id: 8,
            brandUser: {id:1, username: `@vinosdomeniileblaga`, brandname:`Vinos Domeniile Blaga`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
           {
            id: 9,
            image:"../../images/borges.jpeg",
            description: "Tinto",
            brand: "Borges",
            manufactureDate: 2013,
            brand_id: 9,
            brandUser: {id:1, username: `@vinosborges`, brandname:`Vinos Borges`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
           {
            id: 10,
            image:"../../images/thalia.jpg",
            description: "Tinto",
            brand: "Thalia",
            manufactureDate: 2014,
            brand_id: 10,
            brandUser: {id:1, username: `@vinosthalia`, brandname:`Vinos Thalia`},
            likes: 1444,
            comments:[
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 },
               { content: `aaa`, date: new Date (2021, 9, 15), likes: 9 }
            ]
           },
    ],

    find: function(id){
        for (let i = 0; i < posts.list.length; i++) {
            if(posts.list[i].id == id){
               return posts.list[i];
            }
        }
    }

}

module.exports = posts