import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// 1. Preloader Logic
const handlePreloader = () => {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
        setTimeout(() => {
            preloader.remove();
        }, 1000); // Wait for CSS transition to finish before removing from DOM
    }
};

// Execute on load with a slight delay for branding
window.addEventListener('load', () => {
    setTimeout(handlePreloader, 800);
});

// Fallback: Ensure preloader is removed even if load event hangs (e.g. slow image)
setTimeout(handlePreloader, 3000);

// 2. Initialize Gemini AI
// Fix: Use process.env.API_KEY directly as required by guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 3. Chat Logic
const openChatBtn = document.getElementById('open-chat');
const closeChatBtn = document.getElementById('close-chat');
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input') as HTMLInputElement;
const sendChatBtn = document.getElementById('send-chat');

let chatHistory: any[] = [];
const systemInstruction = `
You are the Imar Commercial AI Market Advisor. You are an expert in Florida commercial real estate (CRE).
Your goal is to help users understand market trends, hospitality investments, and property brokerage.
Principal Broker is Eli Gunesebakan, a B.S.E Mechanical Engineer with CCIM and SIOR designations.
Keep responses concise and formatted with markdown.
`;

const addMessage = (role: 'user' | 'model', content: string) => {
    const wrapper = document.createElement('div');
    wrapper.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
    const bubble = document.createElement('div');
    bubble.className = `max-w-[85%] p-3 rounded-2xl text-sm ${role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-slate-100 text-slate-700 rounded-tl-none'}`;
    bubble.innerText = content;
    wrapper.appendChild(bubble);
    chatMessages?.appendChild(wrapper);
    chatMessages?.scrollTo(0, chatMessages.scrollHeight);
    return bubble;
};

const handleChat = async () => {
    const text = chatInput.value.trim();
    if (!text) return;

    chatInput.value = '';
    addMessage('user', text);
    
    const responseBubble = addMessage('model', '...');
    let fullText = '';

    try {
        const chat = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: { systemInstruction }
        });

        const stream = await chat.sendMessageStream({ message: text });
        responseBubble.innerText = '';
        
        for await (const chunk of stream) {
            const part = chunk as GenerateContentResponse;
            // Fix: Use chunk.text property to extract content
            fullText += part.text;
            responseBubble.innerText = fullText;
            chatMessages?.scrollTo(0, chatMessages.scrollHeight);
        }
    } catch (e) {
        responseBubble.innerText = "Connection issue. Please try again.";
    }
};

openChatBtn?.addEventListener('click', () => chatWindow?.classList.toggle('hidden'));
closeChatBtn?.addEventListener('click', () => chatWindow?.classList.add('hidden'));
sendChatBtn?.addEventListener('click', handleChat);
chatInput?.addEventListener('keydown', (e) => e.key === 'Enter' && handleChat());

// 4. Navbar Scroll Interaction
const navbar = document.getElementById('navbar');
const brandText = document.getElementById('brand-text');
const brandSubtext = document.getElementById('brand-subtext');
const brandIcon = document.getElementById('brand-icon');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
        navbar?.classList.remove('bg-transparent', 'py-6', 'md:py-8');
        // Mobile-specific color updates for better visibility on white background
        mobileMenuBtn?.classList.add('mobile-menu-btn-active');
        brandText?.classList.add('brand-text-active');
        brandSubtext?.classList.add('brand-subtext-active');
        brandIcon?.classList.add('brand-icon-active');
    } else {
        navbar?.classList.remove('scrolled');
        navbar?.classList.add('bg-transparent', 'py-6', 'md:py-8');
        mobileMenuBtn?.classList.remove('mobile-menu-btn-active');
        brandText?.classList.remove('brand-text-active');
        brandSubtext?.classList.remove('brand-subtext-active');
        brandIcon?.classList.remove('brand-icon-active');
    }
});

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    let isMenuOpen = false;
    
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            mobileMenuBtn.classList.add('text-slate-900');
            brandText?.classList.add('text-slate-900');
            brandSubtext?.classList.add('text-slate-400');
            brandIcon?.classList.add('bg-slate-950', 'text-white');
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
            if (window.scrollY <= 50) {
                 mobileMenuBtn.classList.remove('text-slate-900');
                 brandText?.classList.remove('text-slate-900');
                 brandSubtext?.classList.remove('text-slate-400');
                 brandIcon?.classList.remove('bg-slate-950', 'text-white');
            }
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
            if (window.scrollY <= 50) {
                mobileMenuBtn.classList.remove('text-slate-900');
                brandText?.classList.remove('text-slate-900');
                brandSubtext?.classList.remove('text-slate-400');
                brandIcon?.classList.remove('bg-slate-950', 'text-white');
            }
        });
    });
}

// 5. Smooth Anchor Scrolling (Vanilla implementation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        // Handle scroll to top for href="#"
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 6. Contact Form Handler (Email to eli@imarcommercial.com)
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name') as HTMLInputElement;
const contactEmail = document.getElementById('contact-email') as HTMLInputElement;
const contactMessage = document.getElementById('contact-message') as HTMLTextAreaElement;

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactName.value || 'Valued Client';
    const email = contactEmail.value;
    const message = contactMessage.value;

    const subject = `Investment Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Open default email client with pre-filled details
    window.location.href = `mailto:eli@imarcommercial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});