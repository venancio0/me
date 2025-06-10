
import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
      {
      company: 'Tecban - Senior',
      position: 'Dev Senior',
      duration: 'Dez 2022 - PRESENTE',
      responsibilities: [
        'Participação ativa na arquitetura de software dos projetos em que trabalhei',
        'Desenvolvimento de microsserviços em Java Spring Boot',
        'Implementação de APIs Open Finance em conformidade com as regulamentações do Open Banking Brasil (FAPI, OpenID Connect, OAuth 2.0)',
        'Atuação internacional em parceria com a empresa inglesa Ozone API'
      ]
    },
      {
      company: 'Tecban - Pleno',
      position: 'Dev Pleno',
      duration: 'May 2022 - Dez 2023',
      responsibilities: [
        'Apoio à adoção do Open Finance Brasil por instituições, com foco em testes de integração e entrega de soluções',
        'Atuação intensa com serviços de API Gateway, ECS, EC2 e DocumentDB na AWS',
        'Implementação de fluxos de autenticação seguros com OAuth 2.0 e OpenID Connect',
        'Atuação internacional em parceria com a empresa inglesa Ozone API'
      ]
    },
    {
      company: 'Beltis - Junior',
      position: 'Dev Junior',
      duration: 'Jun 2021 - Maio 2022',
      responsibilities: [
        'Após 4 meses estagiando, ingressei na Beltis como terceirizado para a Tecban',
        'Trabalhei principalmente com o projeto Open Banking Brasil',
        'Ganhei experiências práticas de desenvolvimento backend com Java e Spring',
        'Além disso, ganhei experiências práticas com DevOps e trabalhar com projetos em produção'
      ]
    },
    {
      company: 'Tecban - Estag.',
      position: 'Estagiário de Desenvolvimento',
      duration: 'Mar 2021 - Jun 2021',
      responsibilities: [
        'Em 2021 ingressei na Tecban como estagiário de desenvolvimento de software',
        'Apesar de ter sido uma jornada curta, ganhei experiência em trabalhar com esteiras CI/CD',
        'Ganhei também experiência com AWS'
      ]
    },
    {
      company: 'Colégio Brasília de São Paulo',
      position: 'Dev Junior',
      duration: 'Fev 2019 - Mar 2021',
      responsibilities: [
        'Trabalhei principalmente na implantação de um sistema de notas utilizando Laravel',
        'Atuava diariamente como suporte técnico aos funcinários e aos serviços acadêmicos',
        'Ganhei experiência em práticas de desenvolvimento modernas e infraestrutura'
      ]
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-heading">Onde já trabalhei</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab buttons */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-6 py-3 text-left whitespace-nowrap border-l-2 md:border-l-2 md:border-b-0 border-b-2
                font-mono text-sm transition-all duration-300
                ${activeTab === index
                  ? 'border-portfolio-green text-portfolio-green bg-portfolio-light-navy'
                  : 'border-portfolio-lightest-navy text-portfolio-slate hover:text-portfolio-green hover:bg-portfolio-light-navy'
                }
              `}
            >
              {exp.company}
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="flex-1">
          <div className="animate-fade-in-up">
            <h3 className="text-xl text-portfolio-lightest-slate mb-2">
              {experiences[activeTab].position}
              <span className="text-portfolio-green"> @ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-portfolio-slate font-mono text-sm mb-6">
              {experiences[activeTab].duration}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-portfolio-green mr-3 mt-2">▹</span>
                  <span className="text-portfolio-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
