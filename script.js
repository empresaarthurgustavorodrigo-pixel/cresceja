document.addEventListener("DOMContentLoaded", function() {
    // 1. FUNCIONALIDADE DO MENU HAMBÚRGUER (MOBILE)
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !isExpanded);
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // 2. ANIMAÇÃO AO ROLAR A PÁGINA (INTERSECTION OBSERVER)
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    animatedElements.forEach(el => observer.observe(el));

    // 3. CARROSSEL DE DEPOIMENTOS
    const testimonials = [
        { text: `"A consultoria foi essencial para organizar nossas vendas e aumentar o faturamento em 30%."`, author: "- Ana Laura - Dona da Mar E Mesa Delivery" },
        { text: `"Com o apoio da Cresce Já, nossa equipe aprendeu técnicas que realmente funcionam."`, author: "- Matheus, Dono da Coffee & Book" },
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

    const updateTestimonial = index => {
        contentWrapper.classList.remove("active");
        setTimeout(() => {
            testimonialElement.textContent = testimonials[index].text;
            authorElement.textContent = testimonials[index].author;
            contentWrapper.classList.add("active");
        }, 300);
    };

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    // Inicializa o primeiro depoimento
    setTimeout(() => contentWrapper.classList.add("active"), 100);

    // 4. SOMBRA NO HEADER AO ROLAR
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 5. DESTACAR ITEM DE MENU ATIVO
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 80) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});