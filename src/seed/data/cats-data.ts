interface SeedCat {
  name: string;
  gender: 'macho' | 'hembra';
  size: 'chico' | 'mediano' | 'grande';
  breed?: string;
  age?: number; // Cambiado a number
  personality?: string;
  info?: string;
  moniker?: string;
  images?: string[];
  status: boolean;
}

interface SeedCatsData {
  cats: SeedCat[];
}

export const initialCatsData: SeedCatsData = {
  cats: [
    {
      name: 'Pelusa',
      gender: 'hembra',
      size: 'mediano',
      breed: 'Persa',
      age: 3,
      personality: 'cariñoso',
      info: 'Pelusa es un gatito adorable con un pelaje suave y sedoso.',
      moniker: 'La reina',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a.jpg',
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de.jpg',
      ],
      status: true,
    },
    {
      name: 'Gatito1',
      gender: 'macho',
      size: 'chico',
      breed: 'Siames',
      age: 2,
      personality: 'juguetón',
      info: 'Gatito1 es un gatito activo y juguetón.',
      moniker: 'El aventurero',
      images: [
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de.jpg',
        '4f5d3e1c-8f11-4ee9-bad3-82d38838e296.jpg',
      ],
      status: true,
    },
    {
      name: 'Miau Miau',
      gender: 'macho',
      size: 'grande',
      breed: 'Maine Coon',
      age: 4,
      personality: 'majestuoso',
      info: 'Miau Miau es un gato grande y majestuoso con un pelaje exuberante.',
      moniker: 'El rey',
      images: [
        '4f5d3e1c-8f11-4ee9-bad3-82d38838e296.jpg',
        '8a6b1bd9-1b10-4c11-bb5c-4d6345a2a019.jpg',
      ],
      status: true,
    },
    {
      name: 'Whiskers',
      gender: 'hembra',
      size: 'mediano',
      breed: 'Angora',
      age: 1,
      personality: 'curioso',
      info: 'Whiskers es una gatita curiosa y llena de energía.',
      moniker: 'La exploradora',
      images: [
        '8a6b1bd9-1b10-4c11-bb5c-4d6345a2a019.jpg',
        '1c5ef61a-8d1c-4a02-a9b8-2851f536c10f.jpg',
      ],
      status: true,
    },
    {
      name: 'Oreo',
      gender: 'macho',
      size: 'chico',
      breed: 'Doméstico',
      age: 2,
      personality: 'amigable',
      info: 'Oreo es un gatito amigable y juguetón con un pelaje blanco y negro.',
      moniker: 'El juguetón',
      images: [
        '1c5ef61a-8d1c-4a02-a9b8-2851f536c10f.jpg',
        '70f92fc4-8d45-4d9c-90a7-97c84961a524.jpg',
      ],
      status: true,
    },
    {
      name: 'Luna',
      gender: 'hembra',
      size: 'mediano',
      breed: 'Sphynx',
      age: 2,
      personality: 'afectuosa',
      info: 'Luna es una gatita afectuosa con una piel sin pelo.',
      moniker: 'La cariñosa',
      images: [
        '70f92fc4-8d45-4d9c-90a7-97c84961a524.jpg',
        'b6eb90d8-7204-4b0e-8e2d-8f0b6b7f3655.jpg',
      ],
      status: true,
    },
    {
      name: 'Tom',
      gender: 'macho',
      size: 'grande',
      breed: 'Bengala',
      age: 3,
      personality: 'activo',
      info: 'Tom es un gato bengala activo y lleno de energía.',
      moniker: 'El velocista',
      images: [
        'b6eb90d8-7204-4b0e-8e2d-8f0b6b7f3655.jpg',
        '3b76bfa1-2a18-4c65-9d64-1c57d9f59ce2.jpg',
      ],
      status: true,
    },
    {
      name: 'Mittens',
      gender: 'hembra',
      size: 'mediano',
      breed: 'Ragdoll',
      age: 2,
      personality: 'relajada',
      info: 'Mittens es una gatita ragdoll relajada y cariñosa.',
      moniker: 'La tranquila',
      images: [
        '3b76bfa1-2a18-4c65-9d64-1c57d9f59ce2.jpg',
        'ed2a3ef4-9772-4a7b-ae9c-68e58c5b2a88.jpg',
      ],
      status: true,
    },
    {
      name: 'Shadow',
      gender: 'macho',
      size: 'chico',
      breed: 'Persa',
      age: 4,
      personality: 'misterioso',
      info: 'Shadow es un gato persa misterioso con ojos penetrantes.',
      moniker: 'El enigmático',
      images: [
        'ed2a3ef4-9772-4a7b-ae9c-68e58c5b2a88.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a0.jpg',
      ],
      status: true,
    },
    {
      name: 'Fluffy',
      gender: 'hembra',
      size: 'grande',
      breed: 'Maine Coon',
      age: 5,
      personality: 'regia',
      info: 'Fluffy es una gata Maine Coon regia con un pelaje impresionante.',
      moniker: 'La elegante',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a0.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a1.jpg',
      ],
      status: true,
    },
    {
      name: 'Coco',
      gender: 'macho',
      size: 'mediano',
      breed: 'Siberiano',
      age: 3.5,
      personality: 'juguetón',
      info: 'Coco es un gatito siberiano lleno de energía y amor por el juego.',
      moniker: 'El juguetón',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a1.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a2.jpg',
      ],
      status: true,
    },
    {
      name: 'Lily',
      gender: 'hembra',
      size: 'chico',
      breed: 'Scottish Fold',
      age: 2,
      personality: 'tierna',
      info: 'Lily es una gatita Scottish Fold tierna con orejas dobladas.',
      moniker: 'La tierna',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a2.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a3.jpg',
      ],
      status: true,
    },
    {
      name: 'Simón',
      gender: 'macho',
      size: 'grande',
      breed: 'Sphynx',
      age: 4,
      personality: 'elegante',
      info: 'Simón es un gato sphynx con un pelaje largo y elegante.',
      moniker: 'El elegante',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a3.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a4.jpg',
      ],
      status: true,
    },
    {
      name: 'Bella',
      gender: 'hembra',
      size: 'mediano',
      breed: 'Ragdoll',
      age: 2,
      personality: 'inteligente',
      info: 'Bella es una gata ragdoll inteligente y curiosa.',
      moniker: 'La curiosa',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a4.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a5.jpg',
      ],
      status: true,
    },
    {
      name: 'Charlie',
      gender: 'macho',
      size: 'chico',
      breed: 'Persa',
      age: 2.5,
      personality: 'juguetón',
      info: 'Charlie es un gatito persa juguetón y lleno de vida.',
      moniker: 'El animado',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a5.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a6.jpg',
      ],
      status: true,
    },
    {
      name: 'Ruby',
      gender: 'hembra',
      size: 'grande',
      breed: 'Bengala',
      age: 3,
      personality: 'activa',
      info: 'Ruby es una gatita bengala activa y juguetona.',
      moniker: 'La juguetona',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a6.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a7.jpg',
      ],
      status: true,
    },
    {
      name: 'Maximus',
      gender: 'macho',
      size: 'mediano',
      breed: 'Maine Coon',
      age: 3.5,
      personality: 'relajado',
      info: 'Maximus es un gato Maine Coon relajado y siempre dispuesto a recibir mimos.',
      moniker: 'El relajado',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a7.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a8.jpg',
      ],
      status: true,
    },
    {
      name: 'Sofía',
      gender: 'hembra',
      size: 'chico',
      breed: 'Siamesa',
      age: 2.5,
      personality: 'graciosa',
      info: 'Sofía es una gatita siamesa graciosa y llena de vitalidad.',
      moniker: 'La graciosa',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a8.jpg',
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a9.jpg',
      ],
      status: true,
    },
    {
      name: 'Oliver',
      gender: 'macho',
      size: 'grande',
      breed: 'Persa',
      age: 4,
      personality: 'sofisticado',
      info: 'Oliver es un gato persa sofisticado y elegante.',
      moniker: 'El sofisticado',
      images: [
        'd7d2b7e5-7955-4d6b-95a1-0db06c5f7a6a9.jpg',
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de0.jpg',
      ],
      status: true,
    },
    {
      name: 'Cupcake',
      gender: 'hembra',
      size: 'mediano',
      breed: 'British Shorthair',
      age: 2,
      personality: 'dulce',
      info: 'Cupcake es una gatita British Shorthair dulce y adorable.',
      moniker: 'La dulce',
      images: [
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de0.jpg',
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de1.jpg',
      ],
      status: true,
    },
    {
      name: 'Leo',
      gender: 'macho',
      size: 'chico',
      breed: 'Ragdoll',
      age: 3,
      personality: 'juguetón',
      info: 'Leo es un gato ragdoll juguetón y lleno de energía.',
      moniker: 'El juguetón',
      images: [
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de1.jpg',
        '8b96b2e2-c609-4313-a50d-f9c1e9be49de2.jpg',
      ],
      status: true,
    },
    {
      name: 'Coronell',
      gender: 'macho',
      size: 'chico',
      breed: 'Ninguno',
      age: 3,
      personality: 'juguetón',
      info: 'Leo es un buen gato.',
      moniker: 'El juguetón',
      images: [
        'a2c2ef82-df39-4f4f-82f9-154b6d0d0cb2.jpg',
        '4de21c8b-5bc5-4dcb-98c3-92b16460eb3e.jpg',
      ],
      status: true,
    },
  ],
};