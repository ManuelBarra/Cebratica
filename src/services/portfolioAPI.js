// src/services/portfolioAPI.js

// En el futuro, esto haría una llamada a un backend real (con fetch o axios).
// Por ahora, es nuestro pequeño almacén de trofeos de guerra.
const projects = [
    {
        id: '1',
        title: 'Fresh Bloom – Cosméticos Naturales',
        before: 'Un producto genial en un frasco que pedía ayuda a gritos.',
        mission:
            'Hicimos que sus cremas se vieran tan bien que daban ganas de comérselas (no lo hagas). Creamos un branding y packaging que transmite frescura y calidad.',
        imageUrl: '/images/fresh-bloom.jpg',
    },
    {
        id: '2',
        title: 'TechNova – Startup Tecnológica',
        before: 'Una web con tanto texto técnico que parecía un manual de instrucciones de la NASA.',
        mission:
            'Transformamos un galimatías tecnológico en una web limpia y una UI que hasta tu madre entendería. Ahora consiguen demos, no dolores de cabeza.',
        imageUrl: '/images/technova.jpg',
    },
    {
        id: '3',
        title: 'Café del Sol – Cafetería Artesanal',
        before: 'Un café de especialidad con una identidad visual... de bar de carretera.',
        mission:
            'Logramos que su café oliera casi tan bien en la pantalla como en la taza. Una identidad visual y menús que abren el apetito (y la cartera).',
        imageUrl: '/images/cafe-del-sol.jpg',
    },
    {
        id: '4',
        title: 'Urban Fit – Gimnasio Boutique',
        before: 'Una landing page que te cansaba más que una sesión de cardio.',
        mission:
            'Creamos una landing que te ponía en forma solo de mirarla. Un sistema visual enérgico que convirtió visitantes en miembros.',
        imageUrl: '/images/urban-fit.jpg',
    },
];

// Simulamos una llamada asíncrona a la API para imitar el comportamiento del mundo real.
export const getProjects = () => {
    return new Promise((resolve) => {
        // Simulamos un pequeño delay de red para que puedas ver estados de carga si los implementas.
        setTimeout(() => {
            resolve(projects);
        }, 500);
    });
};
