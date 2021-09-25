const posts = {
    list:[
        {
         id: 1,
         image: "/images/sauvignonBlanc.jpeg",
         description: "Blanco Sauvignon",
         brand: "New Zeland",
         manufactureDate: 2018,
         brand_id: 1,
         brandUser: {id:1, username: `@newzeland`, brandname:`Vinos New Zeland`, profilepic: "/images/martu2_newzeland .jpg"},
         likes: 1444,
         comments:[
            { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
            { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
            { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `@viñamaipo`, brandname:`Vinos Viña Maipo`}, },
            { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `@viñamaipo`, brandname:`Vinos Viña Maipo`}, }
         ]
        },
        {
            id: 2,
            image:"/images/swartland.jpg",
            description: "Tinto",
            brand: "Swartland",
            manufactureDate: 2014,
            brand_id: 2,
            brandUser: {id:2, username: `@vinoswartland`, brandname:`Vinos Swartland`, profilepic: "/images/logo2.jfif"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 3,
            image:"/images/viñamaipo.jpeg",
            description: "Blanco Sauvignon",
            brand: "Viña Maipo",
            manufactureDate: 2012,
            brand_id: 3,
            brandUser: {id:3, username: `viñamaipo`, brandname:`Vinos Viña Maipo`, profilepic: "/public/images/logo3.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 4,
            image:"/images/palaciodemenadi.jpeg",
            description: "Blanco",
            brand: "Palacio de Menadi",
            manufactureDate: 2013,
            brand_id: 4,
            brandUser: {id:4, username: `@vinosemilia`, brandname:`Vinos Emilia`, profilepic: "/public/images/attachment_75908874-e1552887176124.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 5,
            image:"/images/jacobscreekreserva.jpeg",
            description: "Tinto Shiraz",
            brand: "Jacob´s Creek",
            manufactureDate: 2017,
            brand_id: 5,
            brandUser: {id:5, username: `@reservajacobscreek`, brandname:`Reserva Jacobs Creek`},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 6,
            image:"/images/grandbarossa.jpeg",
            description: "Tinto Shiraz",
            brand: "Gran Barossa",
            manufactureDate: 2017,
            brand_id: 6,
            brandUser: {id:6, username: `@vinosgranbarossa`, brandname:`Vinos Gran Barossa`, profilepic: "/public/images/attachment_75908874-e1552887176124.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 7,
            image:"/images/elephantintheroom.jpeg",
            description: "Cabernet Sauvignon",
            brand: "Elephant in the Room",
            manufactureDate: 2019,
            brand_id: 7,
            brandUser: {id:7, username: `@elephantintheroom`, brandname:`Vinos Elephant`, profilepic: "/public/images/attachment_75908874-e1552887176124.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 8,
            image:"/images/domeniilleblac.jpeg",
            description: "Cabernet Sauvignon",
            brand: "Domeniile Blaga",
            manufactureDate: 2019,
            brand_id: 8,
            brandUser: {id:8, username: `@vinosdomeniileblaga`, brandname:`Vinos Domeniile Blaga`, profilepic: "/public/images/attachment_75908874-e1552887176124.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 9,
            image:"/images/borges.jpeg",
            description: "Tinto",
            brand: "Borges",
            manufactureDate: 2013,
            brand_id: 9,
            brandUser: {id:9, username: `@vinosborges`, brandname:`Vinos Borges`, profilepic: "/public/images/attachment_75908874-e1552887176124.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
            ]
           },
           {
            id: 10,
            image:"/images/thalia.jpg",
            description: "Tinto",
            brand: "Thalia",
            manufactureDate: 2014,
            brand_id: 10,
            brandUser: {id:10, username: `@vinosthalia`, brandname:`Vinos Thalia`, profilepic: "/public/images/attachment_75908874-e1552887176124.jpg"},
            likes: 1444,
            comments:[
               { content: `Qué rico!`, date: new Date (2021, 9, 15), likes: 2,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `WOW`, date: new Date (2021, 9, 8), likes: 9,  brandUser: {id:1, username: `@vinoswartland`, brandname:`Vinos Swartland`}, },
               { content: `Delicioso`, date: new Date (2021, 9, 12), likes: 90, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, },
               { content: `!!!`, date: new Date (2021, 9, 15), likes: 54, brandUser: {id:1, username: `viñamaipo`, brandname:`Vinos Viña Maipo`}, }
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