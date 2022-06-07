import { FooterContainer } from "./styles";

export function Footer() {
  return(
    <FooterContainer>
      <div className="newsletter">
        <span>
          <h3>Se inscreva na newsletter</h3>
          <p>Receba no seu e-mail nossas novidades e cupons de desconto.</p>
        </span>
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="text" placeholder="Qual seu videogame?" />
          <button>
            Cadastrar
          </button>
        </form>
      </div>
      <div className="links">
        <span>
          <p>Institucional</p>
          <ul>
            <li>FALE CONOSCO</li>
            <li>CUPONS</li>
            <li>FRETE GRÁTIS</li>
            <li>LOJAS OFICIAIS</li>
            <li>SOBRE NÓS</li>
            <li>TABELA DE MEDIDAS</li>
            <li>TROCAS E DEVOLUÇÕES</li>
          </ul>
        </span>
        <span>
          <p>Ajuda</p>
          <ul>
            <li>PERGUNTAS FREQUENTES</li>
            <li>TERMOS DE USO</li>
            <li>POLÍTICAS DE PRIVACIDADE</li>
            <li>COMO COMPRAR</li>
          </ul>
        </span>
        <span>
          <p>Atendimento</p>
          <ul>
            <li>
              <img src="/assets/icons/phone.svg" alt="phone" />
              TELEFONE: (11) 99999-0000
            </li>
            <li>
              <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
              WHATSAPP: (11) 99999-0000
            </li>
            <li>
              <img src="/assets/icons/email.svg" alt="email" />
              EMAIL: CONTATO@WEDIGI.COM.BR
            </li>
          </ul>
        </span>
        {/* <span>
          <div className="instagram-title">
            <h5>Siga @wedigi</h5>
            <img src="/assets/icons/instagram.svg" alt="instagram" />
          </div>
          <div className="instagram-post">
            <img src="/assets/img/post_001.png" alt="post_001" />
            <img src="/assets/img/post_002.png" alt="post_002" />
            <img src="/assets/img/post_003.png" alt="post_003" />
          </div>
        </span> */}
      </div>
      <div className="rights-reserved">
        <span>
          <p>
            DOG TRIP BRASIL - CNPJ 33.912.013/0001-96 <br />
            Todos os direitos reservados  
          </p>
        </span>
        <span>
          <img src="/assets/img/cards.png" alt="cards" />
        </span>
        <span>
          <img src="/assets/icons/vtex.svg" alt="vtex" />
          <img src="/assets/icons/logo_bottom.svg" alt="logo" />
        </span>
      </div>
    </FooterContainer>
  )  
}