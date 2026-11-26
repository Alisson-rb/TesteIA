const $ = selector => document.querySelector(selector);
const icons = {
 brand:'<path fill="currentColor" stroke="none" d="M12 0C13.4 7.5 16.5 10.6 24 12c-7.5 1.4-10.6 4.5-12 12C10.6 16.5 7.5 13.4 0 12 7.5 10.6 10.6 7.5 12 0Z"/>',
 arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
 spark:'<path d="m10 3 2.1 6.9L19 12l-6.9 2.1L10 21l-2.1-6.9L1 12l6.9-2.1zM19 2v6m-3-3h6"/>',
 play:'<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',chat:'<path d="M21 11a9 9 0 0 1-13 8l-5 2 1.5-5A9 9 0 1 1 21 11Z"/><path d="M8 8c1 4 3 6 7 7l1-2-3-1-1 1-2-2 1-1-1-3z"/>',wallet:'<path d="M4 7V5l13-3 1 5M3 7h17v13H3zM20 12h-6v4h6"/>',check:'<path d="m3 12 4 4 10-10m-5 10 9-10"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',
 layers:'<path d="m2 8 10-5 10 5-10 5zm1 5 9 4 9-4m-18 5 9 4 9-4"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v5m10-5v5M3 11h18m-14 4h4"/>',people:'<circle cx="9" cy="8" r="3"/><path d="M2 20v-2a7 7 0 0 1 14 0v2m0-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 4 5"/>',message:'<path d="M20 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3zM7 8h9m-9 5h6"/>'};
function draw(root=document){root.querySelectorAll('[data-i]').forEach(i=>{i.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">'+icons[i.dataset.i]+'</svg>'})}
const areas = [
  {
    "id": "saude",
    "label": "Saúde & Bem-Estar",
    "title": "Sua recepção ganha fôlego.",
    "msg": "Oi, Ana! Seu retorno ficou para amanhã, às 10h. Esse horário continua bom para você?",
    "tasks": [
      {
        "id": "confirmar-consultas",
        "label": "Confirmar consultas",
        "messages": {
          "Direto": "Sua consulta está reservada para amanhã às 10h. Podemos confirmar?",
          "Formal": "Solicitamos a confirmação de sua consulta amanhã, às 10h.",
          "Acolhedor": "Oi! Sua consulta está reservada para amanhã às 10h. Podemos confirmar?"
        }
      },
      {
        "id": "organizar-retornos",
        "label": "Organizar retornos",
        "messages": {
          "Direto": "Seu retorno está previsto para a próxima semana. Qual turno funciona melhor?",
          "Formal": "Qual período seria mais conveniente para agendarmos seu retorno na próxima semana?",
          "Acolhedor": "Oi! Seu retorno está previsto para a próxima semana. Qual turno funciona melhor?"
        }
      },
      {
        "id": "conferir-repasses",
        "label": "Conferir repasses",
        "messages": {
          "Direto": "Os repasses de hoje estão organizados por atendimento. Quer conferir o resumo?",
          "Formal": "O demonstrativo dos repasses está disponível para conferência. Deseja recebê-lo?",
          "Acolhedor": "Oi! Os repasses de hoje estão organizados por atendimento. Quer conferir o resumo?"
        }
      }
    ]
  },
  {
    "id": "direito",
    "label": "Direito & Consultoria",
    "title": "Mais atenção para cada caso.",
    "msg": "Olá, Pedro! Para preparar sua primeira conversa com a equipe, você pode resumir o assunto que gostaria de tratar?",
    "tasks": [
      {
        "id": "acompanhar-prazos-processuais",
        "label": "Acompanhar prazos processuais",
        "messages": {
          "Direto": "O prazo de revisão está na sua agenda para quinta-feira. Posso reservar um horário para revisar?",
          "Formal": "Podemos reservar um horário na quinta-feira para a revisão do processo?",
          "Acolhedor": "Oi! O prazo de revisão está na sua agenda para quinta-feira. Posso reservar um horário para revisar?"
        }
      },
      {
        "id": "fazer-a-triagem-inicial",
        "label": "Fazer a triagem inicial",
        "messages": {
          "Direto": "Qual assunto você gostaria de tratar na primeira consulta?",
          "Formal": "Para encaminharmos sua solicitação, poderia informar o assunto da consulta?",
          "Acolhedor": "Oi! Qual assunto você gostaria de tratar na primeira consulta?"
        }
      },
      {
        "id": "organizar-honorarios",
        "label": "Organizar honorários",
        "messages": {
          "Direto": "Os honorários previstos para este mês já estão separados por contrato. Posso mostrar o resumo?",
          "Formal": "Deseja receber o demonstrativo de honorários por contrato referente a este mês?",
          "Acolhedor": "Oi! Os honorários previstos para este mês já estão separados por contrato. Posso mostrar o resumo?"
        }
      }
    ]
  },
  {
    "id": "vendas",
    "label": "Vendas, Comércio & Imobiliário",
    "title": "A próxima oportunidade já tem acompanhamento.",
    "msg": "Oi, Bia! Separei os imóveis com varanda que você pediu. Podemos marcar uma visita na quinta às 14h?",
    "tasks": [
      {
        "id": "qualificar-interessados",
        "label": "Qualificar interessados",
        "messages": {
          "Direto": "Para encontrar a melhor opção, qual faixa de valor você tem em mente?",
          "Formal": "Poderia informar a faixa de investimento que considera adequada?",
          "Acolhedor": "Oi! Para encontrar a melhor opção, qual faixa de valor você tem em mente?"
        }
      },
      {
        "id": "agendar-visitas",
        "label": "Agendar visitas",
        "messages": {
          "Direto": "Há um horário para visita na quinta às 14h. Funciona para você?",
          "Formal": "Temos disponibilidade para uma visita na quinta-feira, às 14h. Podemos confirmar?",
          "Acolhedor": "Oi! Há um horário para visita na quinta às 14h. Funciona para você?"
        }
      },
      {
        "id": "acompanhar-propostas",
        "label": "Acompanhar propostas",
        "messages": {
          "Direto": "Você conseguiu avaliar a proposta? Posso esclarecer algum ponto?",
          "Formal": "Gostaria de algum esclarecimento adicional sobre a proposta encaminhada?",
          "Acolhedor": "Oi! Você conseguiu avaliar a proposta? Posso esclarecer algum ponto?"
        }
      }
    ]
  },
  {
    "id": "criadores",
    "label": "Autônomos, Freelancers & Criadores",
    "title": "Mais espaço para criar.",
    "msg": "Oi, Lucas! O orçamento da identidade visual está pronto. Quer que eu envie o resumo das entregas e os prazos?",
    "tasks": [
      {
        "id": "enviar-orcamentos",
        "label": "Enviar orçamentos",
        "messages": {
          "Direto": "O orçamento está pronto. Posso enviar os valores e as etapas do projeto?",
          "Formal": "Podemos encaminhar o orçamento com o detalhamento dos valores e das etapas?",
          "Acolhedor": "Oi! O orçamento está pronto. Posso enviar os valores e as etapas do projeto?"
        }
      },
      {
        "id": "lembrar-faturas-em-aberto",
        "label": "Lembrar faturas em aberto",
        "messages": {
          "Direto": "A fatura do projeto segue em aberto. Gostaria de receber novamente os dados para pagamento?",
          "Formal": "Consta uma fatura em aberto. Podemos reenviar as instruções de pagamento?",
          "Acolhedor": "Oi! A fatura do projeto segue em aberto. Gostaria de receber novamente os dados para pagamento?"
        }
      },
      {
        "id": "organizar-entregas",
        "label": "Organizar entregas",
        "messages": {
          "Direto": "A primeira entrega está prevista para sexta. Qual horário prefere para a apresentação?",
          "Formal": "A apresentação da primeira entrega está prevista para sexta-feira. Qual horário seria conveniente?",
          "Acolhedor": "Oi! A primeira entrega está prevista para sexta. Qual horário prefere para a apresentação?"
        }
      }
    ]
  }
];
let current=0,yearly=false,plan='Profissional',tone='Acolhedor',task=0;
const tabs=$('#tabs'),panel=$('#panel'),modal=$('#modal'),body=$('#modalBody');
tabs.innerHTML=areas.map((a,i)=>'<button role="tab" aria-controls="panel" id="tab'+i+'">'+a.label+'</button>').join('');
function pick(i){current=i;task=0;Array.from(tabs.children).forEach((b,j)=>{b.setAttribute('aria-selected',j===i);b.tabIndex=j===i?0:-1});panel.setAttribute('aria-labelledby','tab'+i);const {title,tasks,msg}=areas[i];panel.innerHTML='<div><h3>'+title+'</h3><ul>'+tasks.map(t=>'<li>'+t.label+'</li>').join('')+'</ul><button class="primary" data-create>Personalizar minha IA <i data-i="arrow"></i></button></div><div class="sample"><small>ATENDIMENTO DE EXEMPLO</small><p>'+msg+'</p></div>';draw(panel)}
Array.from(tabs.children).forEach((b,i)=>{b.onclick=()=>pick(i);b.onkeydown=e=>{const j=({ArrowRight:(i+1)%areas.length,ArrowLeft:(i+areas.length-1)%areas.length,Home:0,End:areas.length-1})[e.key];if(j!==undefined){e.preventDefault();pick(j);tabs.children[j].focus()}}});pick(0);
const plans=[['Essencial',59,['Agenda e lembretes','Mensagens automáticas','Finanças básicas']],['Profissional',119,['IA especializada na sua área','Controle completo de verbas e CRM','Automação ilimitada']],['Equipe / Empresa',null,['Múltiplos agentes integrados','Gestão de equipe','Relatórios financeiros avançados']]];
const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function prices(){ $('#monthly').setAttribute('aria-pressed',!yearly);$('#annual').setAttribute('aria-pressed',yearly);$('#prices').innerHTML=plans.map(([name,value,items],i)=>'<article class="'+(i===1?'chosen':'')+'">'+(i===1?'<span class="badge">Profissional</span>':'')+'<h3>'+name+'</h3><div class="price">'+(value?brl(yearly?value*10:value)+'<small> / '+(yearly?'ano':'mês')+'</small>':'Sob consulta')+'</div>'+(value && yearly ? '<p>Equivalente a '+brl(value*10/12)+'/mês</p>' : '')+'<ul>'+items.map(t=>'<li>'+t+'</li>').join('')+'</ul><button class="'+(i===1?'primary':'secondary')+'" data-plan="'+i+'">'+(i===2?'Consultar equipe':'Experimentar '+name)+'</button></article>').join('')}
$('#monthly').onclick=()=>{yearly=false;prices()};$('#annual').onclick=()=>{yearly=true;prices()};prices();
let opener;
modal.addEventListener('close', () => {
  if (opener?.isConnected) opener.focus();
  else panel.querySelector('button')?.focus();
});
function openBox(html){if (!modal.open) opener=document.activeElement;body.innerHTML=html;if(!modal.open)modal.showModal();draw(body);const heading=body.querySelector('h2');heading.id='dialogTitle';heading.tabIndex=-1;heading.focus()}
const opts=(values,selected)=>values.map((v,i)=>'<option value="'+i+'" '+(i===selected?'selected':'')+'>'+v+'</option>').join('');
const tones=['Acolhedor','Direto','Formal'];
function configure(){openBox('<div class="eyebrow">DEMONSTRAÇÃO · '+plan.toUpperCase()+'</div><h2>Crie sua IA especialista<span>.</span></h2><form class="fields"><label>Sua área<select id="fieldArea">'+opts(areas.map(a=>a.label),current)+'</select></label><label>Primeira tarefa<select id="fieldTask">'+opts(areas[current].tasks.map(t => t.label),task)+'</select></label><label>Tom de voz<select id="fieldTone">'+opts(tones,tones.indexOf(tone))+'</select></label><button class="primary" type="submit">Experimentar minha IA <i data-i="arrow"></i></button></form>');$('#fieldArea').onchange=e=>{const draftArea=+e.target.value;$('#fieldTask').innerHTML=opts(areas[draftArea].tasks.map(t => t.label),0)};body.querySelector('form').onsubmit=e=>{e.preventDefault();pick(+$('#fieldArea').value);task=+$('#fieldTask').value;tone=tones[+$('#fieldTone').value];result()}}
function result(){openBox('<div class="eyebrow">PRÉVIA PERSONALIZADA</div><h2>Sua IA em ação<span>.</span></h2><p>'+areas[current].label+' · '+areas[current].tasks[task].label+'</p><div class="sample"><small>'+tone.toUpperCase()+'</small><p>'+areas[current].tasks[task].messages[tone]+'</p></div><div class="actions"><button class="primary" id="edit">Ajustar preferências</button></div><div class="contact-actions"><a class="primary" id="contactWA" target="_blank" rel="noopener">Solicitar uma conversa pelo WhatsApp</a><a class="secondary" id="contactMail">Enviar configuração por e-mail</a><a class="secondary" target="_blank" rel="noopener" id="contactGmail">Abrir configuração no Gmail</a></div>');$('#edit').onclick=configure;const selected=plans.find(item=>item[0]===plan);
const cost=selected[1] ? brl(selected[1]*(yearly?10:1))+(yearly?' por ano':' por mês') : 'Sob consulta';
const summary=plan+' · '+cost;
body.querySelector('.sample').insertAdjacentElement('beforebegin',document.createElement('p')).textContent=summary;
const message='Olá! Gostaria de conversar sobre a CrIA.\nPlano: '+summary+'\nÁrea: '+areas[current].label+'\nTarefa: '+areas[current].tasks[task].label+'\nTom: '+tone;
$('#contactWA').href='https://wa.me/5586998053109?text='+encodeURIComponent(message);
$('#contactMail').href='mailto:alissonbiagiotti1@gmail.com?subject=Conversa%20sobre%20a%20CrIA&body='+encodeURIComponent(message);
const draft = new URLSearchParams({view:'cm', fs:'1', to:'alissonbiagiotti1@gmail.com', su:'Conversa sobre a CrIA', body:message});
$('#contactGmail').href='https://mail.google.com/mail/?'+draft;
}
const demos=[['Consulta agendada','Ana pediu um horário para amanhã. A CrIA encontrou uma vaga às 10h, confirmou com ela e reservou o horário na agenda.'],['Verba organizada','Dos R$ 4.250 previstos neste exemplo, R$ 3.000 vêm de atendimentos e R$ 1.250 de retornos já agendados.'],['Tarde livre garantida','O último atendimento termina às 16h. A CrIA preservou o restante da tarde e oferece aos próximos clientes horários do dia seguinte.']];
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-create'))configure();if(b.dataset.plan!==undefined){plan=plans[+b.dataset.plan][0];if (+b.dataset.plan===2) enterprise(); else configure()}if(b.dataset.demo!==undefined){const [title,desc]=demos[+b.dataset.demo];openBox('<div class="eyebrow">ROTINA DE EXEMPLO</div><h2>'+title+'</h2><p>'+desc+'</p><button class="primary" data-create>Experimentar minha IA</button>')}});
$('.close').onclick=()=>modal.close();modal.onclick=e=>{if(e.target===modal&&!body.contains(e.target)){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}};
$('#menu').onclick=()=>$('#menu').setAttribute('aria-expanded',$('#nav').classList.toggle('open'));$('#nav').onclick=()=>{$('#nav').classList.remove('open');$('#menu').setAttribute('aria-expanded','false')};draw();

function enterprise() {
  openBox('<div class="eyebrow">EQUIPE / EMPRESA</div><h2>Converse sobre sua equipe</h2><p>Plano sob consulta. Conte quantas pessoas participarão e quais tarefas deseja organizar.</p><div class="contact-actions"><a class="primary" href="https://wa.me/5586998053109?text=Tenho%20interesse%20no%20plano%20Equipe%20da%20CrIA" target="_blank" rel="noopener">Consultar pelo WhatsApp</a><a class="secondary" href="mailto:alissonbiagiotti1@gmail.com?subject=Consulta%20sobre%20o%20plano%20Equipe">Consultar por e-mail</a> <a target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=alissonbiagiotti1%40gmail.com&amp;su=Consulta+sobre+o+plano+Equipe&amp;body=">Abrir no Gmail</a><button data-create>Experimentar a demonstração da equipe</button></div>');
}
