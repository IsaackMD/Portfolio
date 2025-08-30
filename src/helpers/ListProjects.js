export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Sistema de Generación de Certificados y Diplomas con PHP, MySQL y JavaScript',
                description: 'Desarrolle un sistema web completo para la generación de certificados y diplomas, implementando CRUD (Create, Read, Update, Delete), validaciones con expresiones regulares, gestión de usuarios con control de acceso y una interfaz responsiva adaptable a cualquier dispositivo móvil, con la capacidad de generar certificados y QR codes.',
                image: 'bigSmokeCert.png',
                tech:['PHP con Programación Orientada a Objetos (POO)', 'PDO', 'MySQL', 'JavaScript', 'AJAX', 'JSON','Bootstrap'],
                rep: 'https://github.com/IsaackMD/Personal_CertificadosDiploma/tree/main'
            },
            {
                id: '1001',
                code: 'f230gh0g4',
                name: 'Sistema de Gestión para Curso de Verano para Oficialia Mayor del Estado de Hidalgo',
                description: 'Participe en el desarrollo de una aplicación web utilizando Symfony (framework de PHP) y PostgreSQL para gestionar la inscripción de infantes a un curso de verano. La solución validaba la identidad de cada menor mediante su CURP, lo que optimizó el proceso de registro. Además, el sistema facilitaba la gestión de solicitudes de inscripción, permitiendo aprobar o rechazar registros, asignar grupos por edades y visualizar la información de los solicitantes.',
                image: 'cursoVerano.jpg',
                tech:['Framework Symfony (PHP)', 'Doctrine ORM (PHP)', 'PostgreSQL', 'JavaScript', 'AJAX', 'JSON' ,'Bootstrap'],
            },
            {
                id: '1002',
                code: 'dfjeEE220',
                name: 'Sistema de Gestión para La Compra y Venta de Alimentos Locales',
                description: 'Desarrolle un sistema web completo para la gestión de compra y venta de alimentos locales, implementando CRUD (Create, Read, Update, Delete), validaciones con expresiones regulares, gestión de usuarios con control de acceso y una interfaz responsiva adaptable a cualquier dispositivo móvil.',
                image: 'DeliveryLions.png',
                tech: ['Framework Symfony (PHP)', 'Doctrine ORM (PHP)', 'PostgreSQL', 'JavaScript', 'AJAX', 'JSON','Bootstrap'],
                rep: 'https://github.com/IsaackMD/deliveryLions'
            },
            {
                id: '1003',
                code: 'dfjeEE220',
                name: 'Big Smoke Videogames',
                description: 'El proyecto se inspira de tiendas de videojuego en linea como Steam, este proyecto escolar tiene como prioridad proporcionar una plataforma intuitiva y segura que simplifique la adquisición y distribución de videojuegos, permitiendo a los usuarios adquirir videojuegos con facilidad.',
                image: 'BgSmokeVideojuegosNF.png',
                tech: ['.Net Framework (C#)', 'MySQL', 'HTML', 'CSS', 'AJAX', 'XML','Bootstrap','DataTables', 'Javascript', 'SweetAlert'],
                rep: 'https://github.com/IsaackMD/Big_Smoke_Videojuegos_NF'
            },
            
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    },

    getProductsWithOrdersData() {
        // Este método no estaba definido en tu código original.
        // Debes implementarlo o eliminar las llamadas a él.
        return [
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 10,
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            }
        ];
    }
};
