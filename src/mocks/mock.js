const mock = {
    navs: [{
            id: 1,
            ico: './assets/navbar/Feed.png',
            service: "Feed"
        },
        {
            id: 2,
            ico: './assets/navbar/Ask.png',
            service: "Ask a Colleague"
        },
        {
            id: 3,
            ico: './assets/navbar/Companies.png',
            service: "Companies"
        },
        {
            id: 4,
            ico: './assets/navbar/Services.png',
            service: "Service Directory"
        }
    ],
    ads: [{
            id: 1,
            href: "https://google.com",
            banner: "./assets/ads/adv1.png"
        },
        {
            id: 2,
            href: "https://google.com",
            banner: "./assets/ads/adv2.png"
        }
    ],
    companies: [{
            id: 1,
            href: `https://google.com/`,
            image: './assets/companies/company1.png',
            name: 'Company Name',
            type: 'Manufacturer',
            place: 'Belgrade, Serbia'
        },
        {
            id: 2,
            href: `https://google.com/`,
            image: './assets/companies/company2.png',
            name: 'Company Name',
            type: 'Service Provider',
            place: 'New York, USA'
        },
        {
            id: 3,
            href: `https://google.com/`,
            image: './assets/companies/company3.png',
            name: 'Company Name',
            type: 'Supplier',
            place: 'London, England'
        }
    ],
    friends: [{
            id: 1,
            href: `https://google.com/`,
            image: './assets/users/user1.png',
            name: 'Dennis Adams',
            job: 'Dentist (Practice Owner)',
            place: 'London, England'
        },
        {
            id: 2,
            href: `https://google.com/`,
            image: './assets/users/user2.png',
            name: 'Mary Carpenter',
            job: 'Dentist (Practice Owner)',
            place: 'Belgrade, Serbia'
        },
        {
            id: 3,
            href: `https://google.com/`,
            image: './assets/users/user3.png',
            name: 'Danielle Salazar',
            job: 'Dentist (Practice Owner)',
            place: 'Paris, France'
        }
    ],
    products: [{
            id: 1,
            href: `https://google.com/`,
            image: './assets/products/product1.png',
            name: 'Product Name',
            description: 'Product short description.',
            text: 'The quick brown fox jumps over the lazy dog.'
        },
        {
            id: 2,
            href: `https://google.com/`,
            image: './assets/products/product2.png',
            name: 'Product Name',
            description: 'Product short description.',
            text: 'The quick brown fox jumps over the lazy dog.'
        }
    ]
}

export default mock;