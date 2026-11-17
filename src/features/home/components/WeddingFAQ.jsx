// app/sections/WeddingFAQ.jsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './WeddingFAQ.module.css';

const faqData = [
  {
    id: 1,
    question: 'Does Jashan-e-Riyasat plan destination weddings?',
    answer: 'Yes. Jashan-e-Riyasat plans destination weddings across India and abroad, from royal palaces in Rajasthan and beach resorts in Goa to international venues. We help shortlist locations that fit your style, guest count, and budget, then coordinate venue details, vendor arrangements, travel schedules, and guest movement. Our team stays involved on the ground so you and your families can enjoy the celebration without managing every detail yourselves.',
  },
  {
    id: 2,
    question: 'How does Jashan-e-Riyasat choose venues and vendors?',
    answer: 'We recommend venues and vendors from a trusted network built through years of wedding planning. First, we understand your priorities, guest count, location, budget, and design preferences. Then we share options that suit those needs and explain the practical details, such as availability, logistics, and how each choice fits with the rest of the celebration. This helps every part of the wedding feel considered and cohesive.',
  },
  {
    id: 3,
    question: 'How many weddings does Jashan-e-Riyasat handle at once?',
    answer: 'We take on a limited number of weddings each month so our team can give every celebration focused attention. The number depends on the dates, locations, and scale of the events already in progress. This approach gives your planner time to understand your preferences, coordinate with your family and vendors, and stay responsive from the first meeting through the final event.',
  },
  {
    id: 4,
    question: 'Does Jashan-e-Riyasat offer decor and theme styling?',
    answer: 'Absolutely. Our decor team can develop a complete visual direction, including floral styling, stage design, lighting, table settings, and details across guest areas. We begin with your preferred colours, traditions, venue, and references, then shape a theme that feels personal and works well in the space. The team coordinates the design and setup with the wider event plan so the different functions feel connected.',
  },
  {
    id: 5,
    question: 'How far in advance should couples book Jashan-e-Riyasat?',
    answer: 'For local weddings, we recommend getting in touch 6 to 12 months ahead; destination celebrations often benefit from 12 to 18 months of planning. Earlier conversations give you more choice of dates, venues, and vendors, and leave time to coordinate travel and accommodation for guests. If your date is closer, contact us anyway: we can review what is available and advise on a practical planning schedule.',
  },
  {
    id: 6,
    question: 'Does Jashan-e-Riyasat manage guest hospitality and logistics?',
    answer: 'Yes. We can coordinate guest hospitality from arrival through departure. This may include collecting travel details, airport transfers, hotel rooming lists, transport between venues, welcome information, and on-ground assistance during the events. We plan these arrangements around your schedule and guest needs, helping family and friends know where to go and when.',
  },
  {
    id: 7,
    question: 'Can Jashan-e-Riyasat create a fully personalized wedding experience?',
    answer: 'Yes. We shape the celebration around your personalities, rituals, and priorities rather than beginning with a fixed template. We learn what matters most to you, then tailor details such as the ceremony flow, invitations, menus, decor, entertainment, and guest experience. Your planner keeps those choices aligned with your practical needs, so the wedding feels personal while remaining well organised.',
  },
  {
    id: 8,
    question: 'How does Jashan-e-Riyasat make the wedding feel memorable?',
    answer: 'We start by understanding the moments and traditions that matter most to you. From there, we bring the story into the design, guest experience, and flow of each function, while keeping timing and logistics carefully coordinated. Thoughtful details and calm on-the-day management help the celebration feel personal and welcoming, so you can be present with your guests instead of worrying about what happens next.',
  },
  {
    id: 9,
    question: 'What makes Jashan-e-Riyasat stand out as a luxury wedding planner?',
    answer: 'Couples value our considered design, trusted vendor relationships, and hands-on coordination. We take time to understand the family, traditions, and practical requirements behind each celebration, then bring those details together in a clear plan. Our team remains involved through setup and event days, helping vendors stay aligned and responding calmly when plans need attention.',
  },
  {
    id: 10,
    question: 'Does Jashan-e-Riyasat handle end-to-end wedding planning?',
    answer: 'Yes. End-to-end planning can include developing the concept, shortlisting venues, coordinating decor, catering, entertainment, photography, and other vendors, as well as building schedules and managing event days. We agree the scope with you at the start and keep decisions, responsibilities, and next steps clear throughout planning. This gives you one coordinated team overseeing the moving parts of the celebration.',
  },
  {
    id: 11,
    question: 'Can Jashan-e-Riyasat coordinate meetings across time zones?',
    answer: 'Absolutely. We work with clients living in different time zones and can arrange calls at mutually convenient times. Video meetings, shared planning documents, and regular updates help everyone review options and make decisions without needing to travel for each discussion. Your planner will agree a communication rhythm with you so important approvals and deadlines stay clear.',
  },
  {
    id: 12,
    question: 'Can Jashan-e-Riyasat plan our wedding if we do not live locally?',
    answer: 'Yes. We plan celebrations for couples based across India and overseas. We use video consultations and shared digital plans to discuss ideas, review choices, and track decisions, while our local team coordinates venue visits, vendors, and event-day details. You remain involved in the decisions that matter, with a planner keeping the practical work moving between meetings.',
  },
  {
    id: 13,
    question: 'Will we have one dedicated point of contact?',
    answer: 'Yes. We assign a dedicated planner to guide you through the planning process and serve as your main contact. They keep track of your preferences, decisions, timelines, and open questions, and coordinate with the relevant team members and vendors. This continuity helps communication stay clear from the early planning conversations through the wedding events.',
  },
  {
    id: 14,
    question: 'Will we meet the team handling our wedding?',
    answer: 'Of course. We introduce you to the key people involved in your celebration, which may include your planner, decor lead, and event coordination team. You will know who is responsible for each part of the work and how to reach them through your main point of contact. We make these introductions ahead of the wedding so roles and communication are clear before the event days begin.',
  },
  {
    id: 15,
    question: 'Can we speak to vendors directly?',
    answer: 'We usually coordinate vendor communication so schedules, requirements, and updates stay organised in one place. You are welcome to join discussions or speak directly with a vendor when you want to review a particular detail. Your planner can arrange the conversation and follow up on any decisions, helping everyone stay aligned with the overall plan.',
  },
  {
    id: 16,
    question: 'Can you work with vendors we have already booked on our own?',
    answer: 'Yes. We can work with vendors you have already booked. We will understand their agreed scope, connect with them about schedules and requirements, and include their work in the wider design and event plan. Sharing contracts or booking details early helps us coordinate responsibilities and avoid gaps or overlaps as the wedding approaches.',
  },
  {
    id: 17,
    question: 'How do you manage planning when family is spread across cities or countries?',
    answer: 'We agree who needs to be involved in decisions and how updates should be shared. Digital planning documents, scheduled calls, and clear written summaries help family members follow the timeline and review key choices from different locations. Your planner can help gather feedback, record agreed decisions, and flag items that need approval, keeping communication manageable for everyone.',
  },
  {
    id: 18,
    question: 'Do you help with rooming lists, airport pickups, and transport between functions?',
    answer: 'Yes. We can help prepare rooming lists, coordinate airport pickups, and plan transport between hotels and event venues. We gather the necessary guest and travel information, organise schedules around the function timings, and share clear movement details with the relevant people. This helps guests understand their arrangements and gives the event team a reliable plan to work from.',
  },
];

export default function WeddingFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Split into two columns
  const leftColumn = faqData.filter((_, i) => i % 2 === 0);
  const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

  const renderFAQItem = (item) => (
    <div key={item.id} className={styles.item}>
      <button
        className={styles.question}
        onClick={() => toggleFAQ(item.id)}
      >
        <Image className={styles.flower} src="/flower.svg" alt="" aria-hidden="true" width={24} height={24} />
        <span className={styles.text}>{item.question}</span>
        <span className={`${styles.arrow} ${openId === item.id ? styles.arrowOpen : ''}`}>
          ›
        </span>
      </button>
      <div className={`${styles.answer} ${openId === item.id ? styles.answerOpen : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wedding FAQ&#39;s</h2>
        <p className={styles.subtitle}>Quick answers for couples planning with Jashan-e-Riyasat</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.column}>
          {leftColumn.map(renderFAQItem)}
        </div>
        <div className={styles.column}>
          {rightColumn.map(renderFAQItem)}
        </div>
      </div>
    </section>
  );
}
