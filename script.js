document.addEventListener("DOMContentLoaded", function() {

    // 1. FUNCIONALIDADE DO MENU HAMBÚRGUER (MOBILE)
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // 2. ANIMAÇÃO AO ROLAR A PÁGINA (INTERSECTION OBSERVER)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: para a animação não repetir
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
    

    // 3. CARROSSEL DE DEPOIMENTOS
    const testimonials = [
        { text: `"A consultoria foi essencial para organizar nossas vendas e aumentar o faturamento em 30%."`, author: "- Ana Paula, dona da Boutique Florescer" },
        { text: `"Com o apoio da Cresce Já, nossa equipe aprendeu técnicas que realmente funcionam."`, author: "- Bruno Silva, gerente da Padaria Pão Quentinho" },
        { text: `"Recomendo para qualquer microempresa que queira crescer de forma consistente e prática."`, author: "- Carla Mendes, proprietária da Papelaria Criativa" },
        { text: `"Em poucos meses, vimos uma mudança real na forma como abordamos nossos clientes."`, author: "- Diego Santos, fundador da Loja TecnoSmart" },
        { text: `"O acompanhamento contínuo fez toda a diferença para manter o foco nas metas."`, author: "- Elisa Ribeiro, sócia da Academia Fit Vida" },
        { text: `"A metodologia é simples, prática e adaptada à nossa realidade."`, author: "- Felipe Almeida, dono da Cafeteria Aroma" },
        { text: `"Os treinamentos foram dinâmicos e ajudaram nossa equipe a melhorar a comunicação."`, author: "- Gabriela Costa, gerente da Boutique Elegance" },
        { text: `"A consultoria trouxe soluções que conseguimos aplicar imediatamente."`, author: "- Henrique Oliveira, proprietário da Loja Verdejar" },
        { text: `"Nosso processo de vendas ficou muito mais estruturado e eficiente."`, author: "- Isabel Martins, fundadora da Confeitaria Doce Sabor" },
        { text: `"Com as estratégias aprendidas, conseguimos atrair mais clientes e aumentar nossa receita."`, author: "- João Carlos, sócio da Oficina Moto & Cia" }
    ];
    

    let currentIndex = 0;
    const testimonialElement = document.querySelector(".testimonial-text");
    const authorElement = document.querySelector(".testimonial-author");
    const contentWrapper = document.querySelector(".testimonial-content");

    const updateTestimonial = (index) => {
        contentWrapper.classList.remove("active"); // Sai suavemente
        setTimeout(() => {
            testimonialElement.textContent = testimonials[index].text;
            authorElement.textContent = testimonials[index].author;
            contentWrapper.classList.add("active"); // Entra suavemente
        }, 300); // Tempo para o fade-out antes do fade-in
    };

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    // Inicializa o primeiro depoimento com animação
    setTimeout(() => contentWrapper.classList.add("active"), 100);
});
