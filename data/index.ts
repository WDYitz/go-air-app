import type { Category } from "../types/category"
import type { Trip } from "../types/trip"

type DataType = {
  categories: Category[],
  trips: Trip[]
}

export const data: DataType = {
  categories: [
    {
      "id": 1,
      "title": "Destinos de Luxo",
      "cover": "https://images.unsplash.com/photo-1729605411113-daa81a7836b3?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "title": "Explorações Culturais",
      "cover": "https://images.unsplash.com/photo-1527922751658-fdc12370761e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "title": "Aventuras de Ecoturismo",
      "cover": "https://images.unsplash.com/photo-1678418070266-31068636bbd1?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  trips: [
    {
      id: 1,
      idCategory: 1,
      title: "Suíte Presidencial em Dubai",
      image: "https://images.unsplash.com/photo-1600587193650-6a6615b3e95c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Hospedagem exclusiva com vista panorâmica, mordomo pessoal e traslados em Rolls-Royce.",
      price: 15000
    },
    {
      id: 2,
      idCategory: 1,
      title: "Cruzeiro de Luxo no Caribe",
      image: "https://images.unsplash.com/photo-1517154868524-c6b5fbd62a1c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experiência all-inclusive com gastronomia gourmet, spa e excursões exclusivas.",
      price: 12000
    },
    {
      id: 3,
      idCategory: 1,
      title: "Vila Privativa nas Maldivas",
      image: "https://images.unsplash.com/photo-1602002418679-43121356bf41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Bangalô sobre as águas cristalinas, com piscina privativa e chef particular.",
      price: 18000
    },
    {
      id: 4,
      idCategory: 1,
      title: "Safari de Luxo na África",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Acompanhamento de guias especializados, acomodações exclusivas e observação de animais selvagens.",
      price: 13000
    },
    {
      id: 5,
      idCategory: 1,
      title: "Tour Gastronômico em Paris",
      image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Roteiro personalizado com degustação de pratos requintados em restaurantes renomados.",
      price: 10000
    },
    {
      id: 6,
      idCategory: 2,
      title: "Imersão na Cultura Japonesa",
      image: "https://images.unsplash.com/photo-1701849272935-be51ba962251?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Vivência em templos budistas, cerimônia do chá e aulas de caligrafia.",
      price: 7000
    },
    {
      id: 7,
      idCategory: 2,
      title: "Rota da Seda na Ásia Central",
      image: "https://images.unsplash.com/photo-1554039363-bb1ab89fc855?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Exploração de cidades históricas, bazares e paisagens deslumbrantes.",
      price: 8000
    },
    {
      id: 8,
      idCategory: 2,
      title: "Festivais Tradicionais na Índia",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Participação em celebrações coloridas, com música, dança e culinária típica.",
      price: 6000
    },
    {
      id: 9,
      idCategory: 2,
      title: "Ruínas Maias no México",
      image: "https://images.unsplash.com/photo-1695313309663-ef639a484e26?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Descoberta de sítios arqueológicos, pirâmides e templos ancestrais.",
      price: 5000
    },
    {
      id: 10,
      idCategory: 2,
      title: "Caminhos Sagrados no Tibet",
      image: "https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Jornada espiritual por mosteiros, lagos sagrados e montanhas imponentes.",
      price: 9000
    },
    {
      id: 11,
      idCategory: 3,
      title: "Trilha na Patagônia Argentina",
      image: "https://images.unsplash.com/photo-1612611155301-ac3e1734c91c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Caminhada por geleiras, lagos e montanhas com paisagens de tirar o fôlego.",
      price: 4000,
    },
    {
      id: 12,
      idCategory: 3,
      title: "Mergulho na Grande Barreira de Coral",
      image: "https://images.unsplash.com/photo-1561990488-0e16d60eaa79?q=80&w=1805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Exploração da rica vida marinha em um dos maiores recifes de coral do mundo.",
      price: 3500
    },
    {
      id: 13,
      idCategory: 3,
      title: "Observação de Baleias na Islândia",
      image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Navegação em busca de baleias jubarte, orcas e outras espécies marinhas.",
      price: 4500
    },
    {
      id: 14,
      idCategory: 3,
      title: "Expedição na Amazônia Brasileira",
      image: "https://images.unsplash.com/photo-1574238959725-c727a8f8b4a0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Passeios de barco, trilhas na selva e observação de animais selvagens.",
      price: 5500
    },
    {
      id: 15,
      idCategory: 3,
      title: "Ecoturismo nos Açores, Portugal",
      image: "https://images.unsplash.com/photo-1742219625991-b27040af2539?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Caminhadas em paisagens vulcânicas, observação de aves e degustação de produtos locais.",
      price: 3800
    },
    {
      id: 16,
      idCategory: 1,
      title: "Jantar Romântico em Veneza",
      image: "https://images.unsplash.com/photo-1553262524-695071e8f4b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Passeio de gôndola com jantar exclusivo em um palácio à beira do canal.",
      price: 11000
    },
    {
      id: 17,
      idCategory: 2,
      title: "Aula de Culinária Marroquina em Marrakech",
      image: "https://images.unsplash.com/photo-1697203767647-8d7d171d6216?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Imersão na cultura local com aula de preparo de pratos tradicionais.",
      price: 4800
    },
    {
      id: 18,
      idCategory: 3,
      title: "Rafting no Rio Zambeze, Zâmbia",
      image: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Aventura em corredeiras desafiadoras com paisagens exuberantes.",
      price: 4200
    },
    {
      id: 19,
      idCategory: 1,
      title: "Estadia em Castelo na Escócia",
      image: "https://images.unsplash.com/photo-1603492873309-159a4c4bce68?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experiência medieval com quartos luxuosos, banquetes e passeios guiados.",
      price: 14000
    },
    {
      id: 20,
      idCategory: 2,
      title: "Dança Flamenca em Sevilha, Espanha",
      image: "https://images.unsplash.com/photo-1622659576562-16ef1dab3a4b?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Espetáculo de dança com jantar e vinho em um tablao tradicional.",
      price: 5200
    }
  ]
}