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
    ]
}

export default mock;