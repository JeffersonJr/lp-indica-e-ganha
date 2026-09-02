import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos e Condições | Microsistec" },
      {
        name: "description",
        content: "Termos e Condições de uso da Microsistec",
      },
    ],
  }),
  component: TermosDeUso,
});

function TermosDeUso() {
  const contentClassName =
    "prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-4xl prose-h2:mb-8 prose-h2:tracking-tight prose-h2:text-[color:var(--brand-ink)] dark:prose-h2:text-[color:var(--brand-sand)] prose-h3:text-2xl prose-h3:text-[color:var(--brand-orange)] prose-h3:mt-10 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-[color:var(--brand-orange)] prose-a:no-underline hover:prose-a:underline prose-ul:space-y-2 prose-ul:my-6";
  const triggerClassName =
    "rounded-xl px-6 py-3 text-sm md:text-base font-semibold data-[state=active]:bg-background data-[state=active]:text-[color:var(--brand-orange)] data-[state=active]:shadow-md transition-all";
  const wrapperClassName =
    "bg-card border shadow-soft rounded-3xl p-8 md:p-12 focus:outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <div className="min-h-screen bg-[#fdfdfc] dark:bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[color:var(--brand-orange)] tracking-tight">
            Termos e Condições
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Transparência e segurança são fundamentais. Conheça as regras
            aplicáveis à utilização de nossos serviços e produtos.
          </p>
        </div>

        <Tabs defaultValue="termos" className="w-full">
          <TabsList className="flex flex-wrap w-full justify-start h-auto p-2 bg-muted/70 rounded-2xl gap-2 mb-8 shadow-inner">
            <TabsTrigger value="termos" className={triggerClassName}>
              Termos de Uso
            </TabsTrigger>
            <TabsTrigger value="plataforma" className={triggerClassName}>
              Plataforma
            </TabsTrigger>
            <TabsTrigger value="sites" className={triggerClassName}>
              Sites
            </TabsTrigger>
            <TabsTrigger value="email" className={triggerClassName}>
              E-mail
            </TabsTrigger>
            <TabsTrigger value="privacidade" className={triggerClassName}>
              Privacidade
            </TabsTrigger>
          </TabsList>

          <TabsContent value="termos" className={wrapperClassName}>
            <div className={contentClassName}>
              <h2>Termos de Uso</h2>
              <p>
                A seguir estão descritas as regras aplicáveis à utilização do
                Sistema (doravante "Sistema"), que será disponibilizado e é de
                propriedade legal da Microsistec Tecnologia Imobiliária EPP, com
                sede na cidade de Praia Grande, Estado de São Paulo, na Rua
                Colômbia, nº 660, Jardim Guilhermina, CEP 11702-020,
                representada na forma do seu Contrato Social, doravante
                denominada Microsistec.
              </p>

              <h3>1) Cláusula Primeira – Objeto</h3>
              <p>
                O presente Termo de Serviço e seus Anexos, que são partes
                inseparáveis do presente instrumento, regulam o uso do Sistema
                por parte do Usuário final, doravante "Usuário".
                <br />O sistema será disponibilizado online em{" "}
                <a
                  href="http://microsistec.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://microsistec.com.br
                </a>
                , somente após o aceite expresso do Usuário, concordando com
                todas regras de utilização e escolhendo um dos planos
                disponibilizados.
              </p>
              <p>
                O presente Termo regula ainda, a utilização de todos os serviços
                conectados ao Sistema, cujas regras de utilização estão
                definidas nos Anexos de Serviços, que seguem anexos ao presente
                Termo, conforme segue: Anexo I – Plataforma Microsistec, Anexo
                II - Microsistec Sites, Anexo III - Serviço de E-mail.
              </p>

              <h3>2) Cláusula Segunda – Da Utilização do Sistema</h3>
              <p>
                A utilização do Sistema, a qualquer título, dependerá do aceite
                expresso do Usuário sobre este instrumento e seus anexos. O
                Usuário, ao clicar no botão "Li e Concordo", estará declarando
                ter lido, compreendido e aceitado todas as condições e regras
                ora estabelecidas.
              </p>
              <p>
                Em caso de discordância de quaisquer condições aqui
                apresentadas, a utilização do Sistema deve ser imediatamente
                interrompida.
              </p>
              <p>
                Findo eventual uso por período de teste ou cortesia,
                disponibilizados pela Microsistec, para permanência do uso do
                Sistema, o Usuário, além de renovar a aceitação do presente
                instrumento, deverá fazer opção e aceitação do plano comercial
                que melhor lhe convier, por períodos, condições e custos nele
                explicitado.
              </p>
              <p>
                A Microsistec se reserva ao direito de atualizar o presente
                instrumento e anexos de serviços a qualquer momento, sem prévio
                aviso, sendo recomendado ao Usuário que, a cada novo acesso,
                verifique a data de atualização deste termo, disponíveis para
                consulta dentro do Sistema.
              </p>
              <p>
                O presente instrumento regula, também, a utilização de todos os
                serviços conectados ao Sistema, disponibilizados pela
                Microsistec ao Usuário, de acordo com o plano escolhido pelo
                Usuário eletronicamente, cujo registro e anexos fazem parte
                integrante e indissociável deste instrumento.
              </p>

              <h3>
                3) Cláusula Terceira - Da Propriedade Intelectual e Licença de
                Uso do Sistema
              </h3>
              <p>
                O Usuário não adquire, pelo presente instrumento, nenhum direito
                de propriedade intelectual ou outros direitos exclusivos,
                incluindo patentes, desenhos, marcas, direitos autorais ou
                direitos sobre informações confidenciais ou segredos de
                negócios, sobre ou relacionadas ao Sistema ou nenhuma parte
                dela. O Usuário também não adquire nenhum direito sobre ou
                relacionado ao Sistema ou qualquer componente dele.
              </p>
              <p>
                Este Instrumento concede ao Usuário licença revogável, não
                exclusiva e intransferível, para usar o Sistema, destinando,
                exclusivamente, para imobiliárias e corretores de imóveis
                devidamente registrado no CRECI (Conselho Regional de Corretores
                de Imóveis), sendo vedado o uso ou contratações por terceiros
                que não se enquadrem nesse público alvo.
              </p>
              <p>
                A quantidade e classificação de licenças, números de Usuários
                e/ou serviços adicionais exclusivos, deverão ser objetos de
                declaração expressa de vontade do Usuário, manifestada e
                registrada por formulário de contratação ou outro registro
                expresso de upgrade na vigência deste instrumento (e-mail,
                carta, telegrama, etc.).
              </p>
              <p>
                O Usuário não poderá utilizar e nem permitir o uso do Sistema
                para outra finalidade que não seja o uso interno.
              </p>
              <p>
                Esta licença não implica na capacidade de acessar contas,
                arquivos ou dados de outros Usuários do Sistema.
              </p>
              <p>
                Em nenhuma hipótese o Usuário terá acesso ao código fonte do
                Sistema, por este se tratar de propriedade intelectual da
                Microsistec, conforme dispõe as Leis 9.610/98, 9.609/98 e
                9.279/96. Também não é permitido ao Usuário, a tentativa de
                realização de engenharia reversa ou qualquer outro meio para
                obtenção do código de desenvolvimento do objeto desta licença.
              </p>

              <h3>
                4) Cláusula Quarta - Das Obrigações do Usuário e Utilização do
                Sistema
              </h3>
              <p>
                Em razão da licença de uso tratada neste instrumento, o Usuário
                obriga-se a:
              </p>
              <ul>
                <li>
                  Não copiar, ceder, sublicenciar, vender, dar em locação ou em
                  garantia, reproduzir, doar, alienar de qualquer forma,
                  transferir total ou parcialmente, sob quaisquer modalidades,
                  gratuita ou onerosamente, provisória ou permanentemente, o
                  Sistema objeto deste instrumento, assim como seus módulos,
                  partes, manuais, ou quaisquer informações relativas ao mesmo;
                </li>
                <li>
                  Não retirar ou alterar, total ou parcialmente, os avisos de
                  reserva de direito existente no Sistema, serviços e
                  documentação;
                </li>
                <li>
                  Não praticar de engenharia reversa, descompilação ou
                  desmontagem do Sistema;
                </li>
                <li>
                  Desde seu cadastro inicial até no uso do Sistema, inserir
                  apenas informações verdadeiras referente a seus dados
                  pessoais, imóveis à venda, perfis de interesse, propostas
                  comerciais, entre outras, sendo o Usuário o único responsável
                  por eventuais informações inverídicas ali inseridas;
                </li>
                <li>
                  Possuir as necessárias autorizações de seus clientes para
                  inserir ou veicular os anúncios de imóveis ou dados a eles
                  referentes no Sistema, sendo o Usuário o único responsável
                  pela inserção de tais informações.
                </li>
                <li>
                  Não inserir no Sistema qualquer conteúdo ilícito ou de
                  qualquer modo, contrário a moral e aos bons costumes ou,
                  ainda, que viole direitos de terceiros, conteúdos
                  pornográficos, difamatórios, etc.
                </li>
                <li>
                  Não inserir no Sistema qualquer conteúdo que: 1. Constitua
                  publicidade ilícita, enganosa ou desleal; 2. Incorporem vírus
                  ou qualquer outro componente danoso que possam vir causar
                  danos ou impedir o funcionamento do sistema ou atingir
                  remotamente os equipamentos da Microsistec ou terceiros; 3.
                  Informações ou arquivos que infrinjam a legislação vigente;
                </li>
                <li>
                  Zelar pela segurança e sigilo da sua conta de Usuário e
                  respectiva senha, não a compartilhando com terceiros, sendo o
                  Usuário o único responsável por acessos indevidos decorrentes
                  do uso inadequado da sua conta.
                </li>
                <li>
                  Manter endereços físicos, eletrônicos (e-mail) e telefones
                  válidos e atualizados nos cadastros da Microsistec, a fim de
                  que a mesma possa se comunicar de forma oficial sempre que
                  necessário;
                </li>
                <li>
                  Manter serviços de conexão banda larga de internet, bom como
                  utilizar os browsers (programas de navegação na rede mundial
                  de computadores) recomendados pela Microsistec, a fim de obter
                  os melhores recursos provenientes da utilização do Sistema;
                </li>
                <li>
                  Comunicar à Microsistec, de forma clara e objetiva, sobre
                  qualquer ocorrência de problemas de natureza técnica no uso do
                  Sistema, fornecendo as informações necessárias para obtenção
                  do apoio ou suporte de solução.
                </li>
                <li>
                  Não utilizar o Sistema, nem seus serviços, para prática de
                  envio de mensagens não autorizadas (SPAM);
                </li>
                <li>
                  Quando fizer uso de versão comercial, manter-se estritamente
                  em dia com suas obrigações financeiras, a fim de evitar a
                  suspensão ou cancelamento da licença e/ou serviços.
                </li>
                <li>
                  Em qualquer circunstância, o Usuário sempre será o único
                  responsável pelo mau uso do Sistema, praticados por seus
                  funcionários, colaboradores e/ou prepostos.
                </li>
              </ul>

              <h3>5) Cláusula Quinta - Das Obrigações da Microsistec</h3>
              <p>Obriga-se a Microsistec a:</p>
              <ul>
                <li>
                  A Microsistec garante ao Usuário que o Sistema deverá
                  funcionar regularmente, se respeitadas as condições de uso
                  definidas neste instrumento e ressalvadas situações que não
                  estão sob o controle da Microsistec (queda de energia, falha
                  no serviço de acesso à internet ou falhas no equipamento do
                  Usuário). Na ocorrência de falhas de programação ("bugs"), a
                  Microsistec obriga-se a corrigir tais falhas.
                </li>
                <li>
                  Fornecer, ato contínuo ao aceite deste instrumento, acesso ao
                  Sistema pelo prazo estabelecido entre as partes;
                </li>
                <li>
                  Suspender o acesso ao Sistema que esteja desrespeitando as
                  regras de conteúdo aqui estabelecidas ou as normas legais em
                  vigor ou, ainda, ao final do prazo de validade deste
                  instrumento, independentemente de aviso prévio;
                </li>
                <li>
                  Alterar as especificações e/ou características do Sistema para
                  a melhoria e/ou correções de erros;
                </li>
                <li>
                  Manter sigilo sobre as informações que lhe forem confiadas
                  pelo Usuário pelo uso do Sistema, exceto aquelas que houver
                  permissão de compartilhamento expresso do Usuário;
                </li>
                <li>
                  Disponibilizar acesso aos serviços de consultoria compreendido
                  das 09:00hrs as 18:00hrs (pelo horário de Brasília), exceto
                  sábados, domingos e feriados nacionais, estaduais ou
                  municipais, através do site disponíveis para atendimento, para
                  esclarecimentos de dúvidas relacionadas a falhas no Sistema.
                </li>
              </ul>

              <h3>6) Cláusula Sexta - Nível de Serviços</h3>
              <p>
                A Microsistec empreenderá esforços comercialmente razoáveis para
                tornar o Sistema disponível, no mínimo. 95,0% (noventa e cinco
                por cento) durante cada Ano de Serviços. Na hipótese de a
                Microsistec não cumprir o compromisso, o cliente terá o direito
                de receber o crédito correspondente ao tempo de
                indisponibilidade dos serviços;
              </p>
              <p>
                Por ano de serviços, entenda-se os 365 (trezentos e sessenta e
                cinco) dias precedentes à data de uma reivindicação relacionada
                ao nível de serviços. Se o cliente estiver se utilizando o
                Sistema durante período inferior a 365 (trezentos e sessenta e
                cinco) dias, o ano de serviços que lhe corresponde será, ainda
                assim, considerado como os 365 (trezentos e sessenta e cinco)
                dias precedentes, no entanto, os dias anteriores a seu uso dos
                serviços serão considerados como de 100% (cem por cento) de
                disponibilidade. Os períodos de inatividade operacional que
                ocorrem antes de uma reivindicação bem-sucedida de crédito de
                serviço não poderão ser usados para efeito de reivindicações
                futuras.
              </p>
              <p>
                O compromisso de nível de serviço não se aplica às
                circunstâncias de indisponibilidade caso resultem: De uma
                interrupção do fornecimento de energia elétrica ou paradas
                emergenciais não superior a duas horas ou que ocorram no período
                das 24:00hrs até as 06:00hrs (horário de Brasília); Forem
                causadas por fatores que fujam ao cabível controle da
                Microsistec, inclusive casos fortuitos, de força maior ou de
                acesso à internet e problemas correlatos; De quaisquer atos ou
                omissões do Usuário ou de terceiros; Do equipamento, Sistema ou
                outras tecnologias que o Usuário usar e/ou do equipamento que
                impeçam o acesso regular ao SOFTWARE; De falhas de instância
                individuais não atribuíveis à indisponibilidade do Usuário.
              </p>

              <h3>7) Cláusula Sétima - Da Vigência e Rescisão</h3>
              <p>
                O presente instrumento, que concede a licença de uso do Sistema,
                entra em vigor da data de seu aceite pelo Usuário e suas
                condições, termos e obrigações vigorarão por prazo
                indeterminado;
              </p>
              <p>
                No caso de uso de versões teste, demonstração ou cortesia do
                Sistema, disponibilizadas pela Microsistec, as obrigações deste
                instrumento cessam apenas quanto a remuneração e forma de
                pagamento, permanecendo as demais que garantam sigilos e
                propriedade intelectual da Microsistec;
              </p>
              <p>
                Na vigência do presente instrumento, havendo uma relação
                comercial instituída com responsabilidade técnicas e
                financeiras, é permitido a rescisão deste instrumento, sem ônus
                por qualquer das partes, devendo a parte solicitante requerer o
                cancelamento do acesso ao Sistema e serviços, mediante aviso
                prévio, por escrito, com 30 (trinta) dias de antecedência e
                quitação de eventuais obrigações financeiras em aberto;
              </p>
              <p>
                Inexistindo débitos, a Microsistec manterá o acesso do Usuário
                ao Sistema durante os 30 (trinta) dias após a rescisão, a fim de
                que o mesmo possa tomar as providências para o encerramento da
                sua utilização do Sistema e seus serviços, bem como, caso haja
                pedido expresso encaminhado à outra Parte, esta possa
                providenciar uma cópia de segurança padronizada (backup),
                contendo os dados cadastrados no Sistema (imóveis, informações
                de clientes e proprietários), através de arquivo(s), o qual será
                disponibilizado exclusivamente ao Usuário ou seu representante
                legal, eletronicamente (e-mail ou download).
              </p>

              <h3>8) Cláusula Oitava - Da Remuneração e Forma de Pagamento</h3>
              <p>
                Para uso da versão comercial do Sistema, o Usuário deve pagar à
                Microsistec o valor do respectivo plano escolhido, de acordo com
                a periodicidade definida entre as opções de pagamento
                disponibilizadas ao Usuário no ato da contratação;
              </p>
              <p>
                Caso o Usuário, no decorrer da vigência do presente instrumento,
                opte por outro plano de licenciamento, os valores serão
                alterados de acordo com o respectivo plano escolhido;
              </p>
              <p>
                A falta de pagamento nas datas determinadas para seu vencimento
                acarretará a suspensão de acesso ao Sistema, até que as
                pendências financeiras sejam regularizadas;
              </p>
              <p>
                Caso a suspensão permaneça por prazo superior a 60 (sessenta)
                dias, a Microsistec poderá excluir integralmente as informações
                lançadas no Sistema pelo Usuário;
              </p>
              <p>
                Os valores estabelecidos no ato do licenciamento do Sistema
                serão atualizados anualmente ou no menor lapso de tempo
                legalmente permitido por Lei e o reajuste será pelo IGP-M
                acumulado no período, ou no caso de extinção deste, de outro
                índice oficial que venha a substituí-lo;
              </p>
              <p>
                Uma vez que o reajuste objetiva a adequação do valor do
                licenciamento ao valor de mercado, em caso de deflação do índice
                estipulado no caput do presente, adotar-se-á a variação anual do
                maior índice de correção monetária oficial divulgado por ocasião
                do reajuste;
              </p>
              <p>
                No caso de atraso ou inadimplemento dos pagamentos devidos à
                Microsistec, nas datas estipuladas no momento da contratação, os
                valores devidos serão acrescidos de juros de mora de 2% (dois
                por cento) ao mês, pró-rata-die, multa de 2% (dois por cento)
                sobre o valor do débito e correção monetária pelo IGP-M;
              </p>
              <p>
                O Usuário, desde já, esta ciente e concorda que, caso o seu
                débito persista por mais de 60 (sessenta) dias, a Microsistec
                poderá inscrever seus dados pessoais nos órgãos de proteção ao
                crédito.
              </p>

              <h3>9) Cláusula Nona - Restituição das Informações</h3>
              <p>
                Suspenso o acesso ao Sistema, a Microsistec manterá as
                informações cadastradas pelo Usuário no sistema, pelo período de
                até 60 (sessenta) dias, contados da suspensão de acesso,
                sendo-lhe restituído o acesso integral ou cópia de segurança
                apenas após a quitação de eventuais débitos pendentes.
              </p>

              <h3>
                10) Cláusula Décima - Isenção da Responsabilidade da Microsistec
              </h3>
              <ul>
                <li>
                  Por falta de operação, operação por pessoas não autorizadas ou
                  qualquer outra causa em que não exista culpa da Microsistec;
                </li>
                <li>
                  Pelo não cumprimento dos prazos legais do Usuário para a
                  entrega de documentos fiscais ou pagamentos de impostos;
                </li>
                <li>
                  Pelos danos ou prejuízo decorrentes de decisões
                  administrativas, gerenciais ou comerciais tomadas com base nas
                  informações fornecidas pelo Sistema;
                </li>
                <li>
                  Por problemas definidos como "caso fortuito" ou "força maior"
                  contemplados pelo Art. 393, do Código Civil Brasileiro.
                </li>
              </ul>

              <h3>
                11) Cláusula Décima Primeira - Do Cancelamento da Licença do
                Sistema
              </h3>
              <p>
                A Microsistec se reserva o direito de cancelar ou suspender a
                licença de uso do Sistema por tempo indeterminado, objeto deste
                instrumento, sem aviso prédio, nos casos em que o Usuário venha
                utilizar de forma diversa daquela estipulada no presente
                instrumento.
              </p>

              <h3>12) Cláusula Décima Segunda - Das Garantias Limitadas</h3>
              <ul>
                <li>
                  Na extensão máxima permitida pela lei em vigor, o Sistema é
                  fornecida "no estado em que se encontra" e "conforme a
                  disponibilidade", que em função do estágio tecnológico não
                  permite a Microsistec garantir a inocorrência de eventuais
                  erros, falhas, vícios ou defeitos;
                </li>
                <li>
                  A Microsistec não garante que as funções contidas no Sistema
                  atendam às suas necessidades, que sua operação seja
                  ininterrupta ou livre de erros, que qualquer serviço
                  continuará disponível, que os defeitos sempre serão corrigidos
                  ou que seja compatível ou funcione com qualquer sistema
                  operacional, aplicações ou serviços de terceiros;
                </li>
                <li>
                  O Usuário reconhece que o Sistema não deve ser utilizado ou
                  não são adequados para serem utilizados em situações ou
                  ambiente nos quais a falha ou atraso de dados, os erros ou
                  inexatidões de conteúdo, possam ocasionar danos pessoais,
                  danos físicos ou ambientais.
                </li>
              </ul>

              <h3>
                13) Cláusula Décima Terceira - Limitação de Responsabilidade
              </h3>
              <ul>
                <li>
                  Em nenhum caso a Microsistec será responsável por danos
                  pessoais ou qualquer prejuízo incidental, especial, indireto
                  ou consequente, incluindo, sem limitação, prejuízos por perda
                  de lucro, corrupção ou perda de dados, falha de transmissão ou
                  recepção de dados, não continuidade do negócio ou qualquer
                  outro prejuízo ou perda comercial, decorrentes ou relacionados
                  ao seu uso ou sua inabilidade em usar o Sistema, por qualquer
                  outro motivo;
                </li>
                <li>
                  Sob nenhuma circunstância a responsabilidade integral da
                  Microsistec com relação ao Usuário por todos os danos excederá
                  a quantia pega pelo Usuário à Microsistec pela obtenção da
                  presente licença do Sistema;
                </li>
                <li>
                  Em hipótese alguma a Microsistec, bem como seus diretores,
                  executivos, funcionários, afiliadas, agentes, contratados ou
                  licenciadores, responsabilizar-se-ão por perdas ou danos
                  causados pelo uso do Sistema, de forma direta ou indireta.
                </li>
              </ul>

              <h3>14) Cláusula Décima Quarta - Das Disposições Legais</h3>
              <ul>
                <li>
                  O Usuário não poderá prestar serviços a terceiros utilizando o
                  Sistema da Microsistec sem autorização prévia e expressa da
                  mesma;
                </li>
                <li>
                  Caso o Usuário venha a desenvolver um novo módulo ou produto
                  que caracterize cópia, de todo ou em parte, quer seja do
                  dicionário de dados, quer seja do programa, será considerado
                  como parte do Sistema fornecido pela Microsistec, ficando,
                  portanto, sua propriedade incorporada pela Microsistec e seu
                  uso condicionado a estas cláusulas contratuais;
                </li>
                <li>
                  Este Instrumento obriga as partes e seus sucessores e somente
                  o Usuário possui licença não exclusiva para a utilização do
                  Sistema, sendo-lhe, entretanto, vedado transferir ou direitos
                  e obrigações impostos por este instrumento. Tal limitação, no
                  entanto, não atinge a Microsistec, que poderá, a qualquer
                  tempo, ceder, no todo ou em parte, os direitos e obrigações
                  inerentes ao presente instrumento;
                </li>
                <li>
                  A Tolerância de uma parte para com a outra quanto ao
                  descumprimento de qualquer uma das obrigações assumidas neste
                  contrato não implicará em novação ou renúncia de direito. A
                  parte tolerante poderá, a qualquer tempo, exigir da outra
                  parte o fiel e cabal cumprimento deste contrato;
                </li>
                <li>
                  Não constituem causa de rescisão contratual, o não cumprimento
                  das obrigações aqui assumidas em decorrência de fatos que
                  independem da vontade das partes, tais como os que configuram
                  o caso fortuito e a força maior prevista no Art.393 do Código
                  Civil Brasileiro;
                </li>
                <li>
                  Se qualquer disposição deste instrumento for considerada nula,
                  anulável, inválida ou inoperante, nenhuma outra disposição
                  deste instrumento será afetada como consequência disso e,
                  portanto, as disposições restantes deste pacto permanecerão em
                  pleno vigor e efeito como se tal disposição nula, anulável,
                  inválida ou inoperante não estivesse contida neste;
                </li>
                <li>
                  O Usuário concorda que a Microsistec possa divulgar o
                  fechamento do contrato para fins comercias, fazendo menção ao
                  nome e à marca do Usuário em campanhas comerciais, podendo,
                  inclusive, divulgar mensagens enviadas de forma escrita ou
                  oral, por telefone, para uso em sites, jornais, revistas e
                  outras campanhas, enquanto vigorar o presente instrumento. O
                  Usuário aceita, ainda, receber notificações via correio
                  eletrônico sobre treinamentos, parcerias e campanhas
                  relacionadas o Sistema.
                </li>
              </ul>

              <h3>15) Cláusula Décima Quinta - Da Lei Aplicável</h3>
              <p>
                Este instrumento será regido, interpretado e se sujeitará às
                leis brasileiras e, em caso de inadimplência das obrigações,
                Usuário e Microsistec, desde logo elegem, de forma irrevogável e
                irretratável, o foro da comarca da cidade de Praia Grande,
                Estado de São Paulo, para dirimir quaisquer dúvidas ou
                controvérsias oriundas deste pacto, com a exclusão de qualquer
                outro, por mais privilegiado que seja.
              </p>

              <h3>16) Cláusula Décima Sexta - Declaração de Vontade</h3>
              <p>
                O Usuário declara ter ciência dos direitos e obrigações
                decorrentes do presente instrumento, constituindo este, o acordo
                completo entre as partes. Declara, ainda, ter lido, compreendido
                e aceito todos os termos e condições.
              </p>

              <h3>17) Cláusula Décima Sétima – Reclamações</h3>
              <p>
                O Usuário concorda e se compromete a enviar quaisquer
                reclamações referentes ao Sistema, informações contidas nele
                e/ou inconformidades dos dados, entrando em contato pelo e-mail:
                suporte@Microsistec.com.br antes de tomar qualquer outra
                providência. O Usuário também se compromete a esperar resposta
                do contato antes de tomar qualquer outra providência.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="plataforma" className={wrapperClassName}>
            <div className={contentClassName}>
              <h2>Plataforma Microsistec</h2>
              <p>
                O presente anexo constitui parte integrante do Termo de uso da
                Plataforma Microsistec, cuja finalidade destina-se a
                especificação de regras de utilização, sem prejuízo daquelas já
                expostas no instrumento principal.
              </p>
              <p>
                Para utilização do serviço objeto deste documento, o Usuário
                declara ter lido, compreendido e aceitado todas as condições e
                regras aqui estabelecidas.
              </p>
              <p>
                A Microsistec se reserva no direito de atualizar o presente
                instrumento e anexos de serviços a qualquer momento, sem prévio
                aviso, a cada novo acesso, verifique a data de atualização
                firmada dos documentos, disponíveis para consulta no endereço:{" "}
                <a
                  href="http://imob.online/terms"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://imob.online/terms
                </a>
                .
              </p>

              <h3>1) Cláusula Primeira – Objeto</h3>
              <p>
                A Plataforma Microsistec é um aplicativo online para
                gerenciamento imobiliário.
              </p>

              <h3>2) Cláusula Segunda – Regras de Uso</h3>
              <p>
                Sem prejuízo das demais disposições do Contrato de licença de
                usuário final, ao qual o presente anexo é parte integrante,
                aplicam-se, ainda, a utilização desse serviço as seguintes
                regras:
              </p>
              <ul>
                <li>
                  O uso da Plataforma Microsistec é de uso restrito pelo Usuário
                  registrado, sendo registrado sua transferência à terceiros;
                </li>
                <li>
                  Compromete-se o Usuário a não utilizar o serviço Plataforma
                  Microsistec para fim diversa daquele para o qual foi
                  desenvolvido, cujas práticas concederão o direito à
                  Microsistec de suspensão imediata do acesso ao serviço;
                </li>
              </ul>

              <h3>3) Cláusula Terceira - Remuneração</h3>
              <p>
                A Plataforma Microsistec é um serviço incluso no valor do plano
                selecionado pelo Usuário no momento da contratação da Plataforma
                Microsistec, na quantidade de licenças ali discriminadas. Desta
                forma, no que pese esse serviço, enquanto não houver contratação
                de licenças adicionais, nenhuma remuneração extra será cobrada.
              </p>
              <p>
                A Microsistec poderá, mediante aviso prévio e a seu exclusivo
                critério, substituir a Plataforma Microsistec por novas versões
                na mesma ou em outras plataformas, quando o Usuário poderá
                manifestar se deseja continuar a utilizar o serviço e concorda
                com a cobrança.
              </p>
              <p>
                Desejando o Usuário adquirir licenças adicionais da Plataforma
                Microsistec, deverá fazê-los através de solicitação por escrito,
                endereçada ao departamento comercial, mediante remuneração extra
                à Microsistec por cada licença solicitada.
              </p>

              <h3>
                4) Cláusula Quarta - Hipóteses adicionais de Isenção de
                Responsabilidade
              </h3>
              <p>
                A Plataforma Microsistec foi desenvolvida para ser utilizada na
                plataforma online, sendo assim, qualquer falha ou mau
                funcionamento, provocados por uso em outro tipo de plataforma,
                aplicativos ou serviços, não será atribuída responsabilidade à
                Microsistec.
              </p>
              <p>
                Por mera liberalidade, a Microsistec disponibiliza aos usuários
                da Plataforma Microsistec, materiais de suporte online, enquanto
                vigorar a licença de uso.
              </p>

              <h3>5) Cláusula Quinta - Duração e Término</h3>
              <p>
                Este anexo e o serviço nele especificado, permanecerão válidos e
                disponíveis ao Usuário enquanto vigorar o termo de uso
                disponível.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="sites" className={wrapperClassName}>
            <div className={contentClassName}>
              <h2>Microsistec Sites</h2>
              <p>
                O presente anexo constitui parte integrante do Termo de uso
                final da Plataforma Microsistec, cuja finalidade destina-se a
                especificação de regras de utilização, sem prejuízo daquelas já
                expostas no instrumento principal.
              </p>
              <p>
                Para utilização do serviço objeto deste documento, o Usuário
                declara ter lido, compreendido e aceito todas as condições e
                regras aqui estabelecidas.
              </p>
              <p>
                A Microsistec se reserva no direito de atualizar o presente
                instrumento e anexos de serviços a qualquer momento, sem prévio
                aviso, sendo recomendado ao Usuário que, a cada novo acesso,
                verifique a data de atualização firmada dos documentos.
              </p>

              <h3>1) Cláusula Primeira – Objeto</h3>
              <p>
                O Microsistec Site é um serviço oferecido pela Microsistec, de
                uso opcional, definido pela disponibilização de 01 (um) site
                pronto, escolhido pelo Usuário, a partir de modelos
                desenvolvidos previamente pela Microsistec e publicados para
                seleção no endereço{" "}
                <a
                  href="https://microsistec.com.br/temas"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://microsistec.com.br/temas
                </a>
                ;
              </p>
              <p>
                Os modelo de sites prontos permitem algumas edições, as quais
                estão disponíveis ao Usuário dentro da Plataforma Microsistec.
              </p>

              <h3>2) Cláusula Segunda – Remuneração</h3>
              <p>
                O Microsistec Site Padrão, apesar de utilização opcional, é um
                serviço incluso no valor do plano selecionado pelo Usuário no
                momento da contratação da Plataforma Microsistec. Desta forma,
                no que pese esse serviço, enquanto vigorar o Contrato de licença
                de usuário final, nenhum abono ou remuneração extra serão
                realizados pela utilização ou não utilização do serviço.
              </p>

              <h3>3) Cláusula Terceira - Ativação e Manutenção</h3>
              <p>
                Para ativação do Microsistec Site Padrão será necessário que o
                Usuário forneça à Microsistec, além daquelas fornecidas no
                momento da contratação da Plataforma Microsistec, algumas
                informações indispensáveis, as quais serão solicitadas junto às
                informações de contratação.
              </p>
              <p>
                Após MICROSISTEC SITE será disponibilizado junto com a Sistema,
                publicado no endereço fornecido e disponibilizado para que o
                Usuário inicie a sua utilização;
              </p>
              <p>
                A inclusão de qualquer recurso adicional no Microsistec Site
                Padrão ou Sob Medida está sujeita a análise pela equipe técnica
                da Microsistec e poderá acarretar custos adicionais, estipulados
                em orçamento específico ao Usuário;
              </p>
              <p>
                Quaisquer falhas ou erros de funcionamento do Microsistec Site
                Padrão deverão ser apontadas e registradas expressamente pelo
                Usuário em nossos canais de suporte ou através do e-mail
                suporte@microsistec.com.br.
              </p>

              <h3>4) Cláusula Quarta - Regras Específicas</h3>
              <p>
                Sem prejuízo das demais disposições do Contrato de licença de
                usuário final, ao qual o presente anexo é parte integrante,
                aplicam-se, ainda, na utilização do Microsistec Site as
                seguintes regras:
              </p>
              <ul>
                <li>
                  É propriedade intelectual da Microsistec os layouts gráficos
                  de todos os modelos do Microsistec Site Padrão, imagens ou
                  elementos gráficos e todos os arquivos estruturais e
                  funcionais de programação de quaisquer tipos de site, sendo
                  vedado ao Usuário a utilização de tal conteúdo de maneira
                  diversa ao que foi disponibilizado e terminantemente proibido
                  o acesso por terceiros ou a reivindicação de direitos sobre a
                  tecnologia de desenvolvimento;
                </li>
                <li>
                  Cessada licença de uso ou rescindido o Contrato de licença de
                  usuário final, o Usuário deverá se abster da utilização de
                  qualquer conteúdo do MICROSISTEC SITE desenvolvido pela
                  Microsistec, sob pena de incorrer em apropriação indevida de
                  direitos intelectuais e penalidade legais.
                </li>
              </ul>

              <h3>
                5) Cláusula Quinta - Hipóteses adicionais de Isenção de
                Responsabilidade
              </h3>
              <p>
                O Usuário é o único responsável por todas as informações e
                conteúdos inseridos por ele ou seus usuários autorizados no
                Microsistec Site, bem como por todas informações fornecidas à
                equipe da Microsistec para a ativação ou desenvolvimento,
                isentando, integralmente, esta de qualquer dano, prejuízo ou
                violação de direitos de terceiros, decorrentes de seus atos.
              </p>

              <h3>6) Cláusula Sexta - Duração e Término</h3>
              <p>
                Este anexo e o serviço nele especificado, permanecerão válidos e
                disponíveis ao Usuário enquanto vigorar o termo de uso
                disponível.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="email" className={wrapperClassName}>
            <div className={contentClassName}>
              <h2>Serviço de E-mail</h2>
              <p>
                O presente anexo constitui parte integrante do Termo de uso da
                Plataforma Microsistec, cuja finalidade destina-se a
                especificação de regras de utilização, sem prejuízo daquelas já
                expostas no instrumento principal.
              </p>
              <p>
                Para utilização do serviço objeto deste documento, o Usuário
                declara ter lido, compreendido e aceitado todas as condições e
                regras aqui estabelecidas.
              </p>
              <p>
                A Microsistec se reserva no direito de atualizar o presente
                instrumento e anexos de serviços a qualquer momento, sem prévio
                aviso, sendo recomendado ao Usuário que, a cada novo acesso,
                verifique a data de atualização firmada dos documentos.
              </p>

              <h3>1) Cláusula Primeira - Objeto</h3>
              <p>
                O Serviço de e-mail é um serviço oferecido pela Microsistec, de
                uso opcional pelo Usuário, definido pela disponibilização de
                contas de correio eletrônico corporativas (e-mail), por um único
                domínio, com a finalidade de envio e recebimento de mensagens,
                cuja capacidade de armazenamento para cada caixa possui o limite
                de 10 (dez) gigabytes;
              </p>
              <p>
                O serviço Microsistec E-mail, durante a vigência do Contrato de
                licença de usuário final, poderá ser utilizado pelo Usuário
                através da plataforma WEBMAIL, o endereço de acesso será
                informado ao Usuário no ato da configuração e instalação do seu
                site.
              </p>

              <h3>2) Cláusula Segunda - Regras de Uso</h3>
              <p>
                Sem prejuízo das demais disposições do contrato de licença de
                usuário final, ao qual o presente anexo é parte integrante,
                aplicam-se, ainda, a utilização desse serviço as seguintes
                regras:
              </p>
              <ul>
                <li>
                  O uso do Microsistec E-mail é de uso restrito do usuário
                  registrados na Plataforma Microsistec, sendo restrita sua
                  transferência à terceiros;
                </li>
                <li>
                  Compromete-se o Usuário a não utilizar o serviço Microsistec
                  E-mail para prática de SPAM (envio de mensagens não
                  solicitadas pelos destinatários), enviar mensagens
                  publicitárias ou e-mail marketing, disseminação de vírus ou
                  código maliciosos, cujas práticas concederão o direito à
                  Microsistec de suspensão imediata do acesso ao serviço;
                </li>
                <li>
                  Não armazenar e nem veicular por meio das caixas postais
                  disponibilizadas material pornográfico, racista ou que
                  demonstre qualquer outro tipo de preconceito de raça, credo,
                  cor ou qualquer outro material que afronte a moral, os bons
                  costumes e/ou que seja caracterizado como "pirata" e/ou que
                  afronte por qualquer outra maneira a legislação em vigor, Sob
                  pena de imediata suspensão da prestação dos serviços
                  contratados idependente de aviso ou notificação, em caso de
                  determinação judicial nesse sentido;
                </li>
                <li>
                  Respeitar fielmente o compromisso anti-spam da Microsistec,
                  atualmente constante do “site” WWW.LOCAWEB.COM.BR e do
                  registro 8668039 no 3º Oficial de Registro de Títulos e
                  Documentos de São Paulo Capital, bem como aquele que
                  eventualmente o substituir e que passa a integrar o presente
                  contrato, não enviando e nem permitindo que se envie qualquer
                  tipo de mensagem de e-mail não autorizada que seja ou que
                  possa ser caracterizada como SPAM envolvendo sua empresa ou
                  seu site, Sob pena de imediata suspensão da prestação dos
                  serviços contratados idependente de aviso ou notificação;
                </li>
                <li>
                  Entende-se como violador do compromisso anti-spam da
                  Microsistec, nos expressos termos do mesmo: não só o envio de
                  publicidade não solicitada (mala direta) via e-mail como
                  também o envio de qualquer tipo de e-mail não autorizado, de
                  caráter geral, e/ou de qualquer outro tipo de mensagem
                  eletrônica que motive reclamação de qualquer destinatário do
                  mesmo e/ou de qualquer organismo e/ou indivíduo com funções de
                  combate e repressão à prática de SPAM;
                </li>
                <li>
                  A prática de qualquer ato do Usuário do qual resulte o
                  bloqueio do IP da Microsistec por qualquer órgão e/ou
                  organismo ANTISPAM; a prática de qualquer ato pelo Usuário que
                  gere a presunção, pela Microsistec, de prática de SPAM pelo
                  Usuário, nos exatos termos do compromisso anti-spam.
                </li>
                <li>
                  Desenvolver, se assim julgar conveniente, sistema próprio de
                  armazenamento e conservação de mensagens uma vez que NÃO É
                  EFETUADO BACKUP DE MENSAGENS DE E-MAIL.
                </li>
              </ul>

              <h3>3) Cláusula Terceira - Remuneração</h3>
              <p>
                O Microsistec E-mail, apesar de utilização opcional, é um
                serviço incluso no valor do plano selecionado pelo Usuário no
                momento da contratação da Plataforma Microsistec, na mesma
                quantidade de usuários contratados para acesso ao programa.
                Desta forma, no que pese esse serviço, enquanto não houver
                contratação de usuários adicionais, nenhuma remuneração extra
                será cobrada pelo serviço de contas de correio eletrônico,
                ressalvado o direito de cobrança em caso de ampliação do limite
                de capacidade de armazenamento, descrito no objeto deste
                documento;
              </p>
              <p>
                A Microsistec poderá, mediante aviso prévio e a seu exclusivo
                critério, revogar o caráter de gratuidade desse serviço, quando
                o Usuário poderá manifestar, se deseja continuar a utilizar o
                serviço e concorda com a cobrança;
              </p>
              <p>
                Desejando o Usuário adquirir contas adicionais do Microsistec
                E-mail, deverá fazê-lo através de solicitação por escrito,
                endereçada ao departamento comercial, mediante remuneração extra
                à Microsistec por cada conta solicitada.
              </p>

              <h3>
                4) Cláusula Quarta - Hipóteses Adicionais de Isenção de
                Responsabilidade
              </h3>
              <p>
                O Microsistec E-mail foi desenvolvido para ser utilizado na
                plataforma webmail, sendo assim, qualquer falha ou mau
                funcionamento, provocados por uso em outro tipo de plataforma,
                aplicativos ou serviços, não serão atribuídas responsabilidade à
                Microsistec;
              </p>
              <p>
                Por mera liberalidade, a Microsistec, disponibiliza aos usuários
                do Microsistec E-mail os protocolos de autenticação POP3, SMTP,
                IMAP, porém, em nenhuma hipótese, se responsabiliza pela
                configuração ou suporte técnico da ferramenta em aplicações que
                utilizem essas autenticações;
              </p>
              <p>
                O Microsistec E-mail não poderá, em hipótese alguma, ser
                utilizado como serviço de armazenamento ou cópia de segurança de
                dados, não sendo, portanto, a Microsistec responsável eventual
                perda de informações decorrentes desse tipo de utilização.
              </p>

              <h3>5) Cláusula Quinta - Duração e Término</h3>
              <p>
                Este anexo e o serviço nele especificado, permanecerão válidos e
                disponíveis ao Usuário enquanto vigorar o termo de uso
                disponível.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="privacidade" className={wrapperClassName}>
            <div className={contentClassName}>
              <h2>Política de Privacidade</h2>
              <p>
                Bem-vindo e obrigado pelo seu interesse no CRM Microsistec,
                nosso site em{" "}
                <a
                  href="https://www.microsistec.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.microsistec.com.br
                </a>{" "}
                (o "Site"), e todos os sites relacionados, software para
                download, aplicativos móveis (incluindo aplicativos para
                tablets) e outros serviços fornecidos por nós e nos quais é
                exibido um link para esta Política de Privacidade e todas as
                outras comunicações com indivíduos por meios escritos ou
                verbais, como e-mail ou telefone, juntamente com o Site, nosso
                "Serviço").
              </p>
              <p>
                Esta Política de Privacidade ("Política") descreve as
                informações que coletamos no ou por meio do Serviço, como usamos
                e divulgamos tais informações e as medidas que tomamos para
                proteger essas informações. Ao visitar o Site ou ao comprar ou
                usar o Serviço, você aceita as práticas de privacidade descritas
                nesta Política.
              </p>

              <h3>DEFINIÇÕES</h3>
              <p>"Cliente" significa um cliente do CRM Microsistec.</p>
              <p>
                "Dados do Cliente" significa dados pessoais, relatórios,
                endereços e outros arquivos, pastas ou documentos em formato
                eletrônico que um Usuário do Serviço armazena no Serviço.
              </p>
              <p>
                "Dados Pessoais" significa qualquer informação relativa a uma
                pessoa singular identificada ou identificável.
              </p>
              <p>
                "Área Pública" significa a área do Site que pode ser acessada
                tanto por Usuários quanto por Visitantes, sem a necessidade de
                efetuar login.
              </p>
              <p>
                "Área Restrita" significa a área do Site que pode ser acessada
                somente pelos Usuários e onde o acesso requer login.
              </p>
              <p>
                "Usuário" significa um funcionário, agente ou representante de
                um Cliente, que usa principalmente as áreas restritas do Site ou
                CRM com o objetivo de acessar o Serviço nessa capacidade.
              </p>
              <p>
                "Visitante" significa um indivíduo que não seja um Usuário, que
                usa a área pública, mas não tem acesso às áreas restritas do
                Site ou Serviço.
              </p>

              <h3>2. AS INFORMAÇÕES QUE COLETAMOS NO SERVIÇO:</h3>
              <p>
                Coletamos diferentes tipos de informações do ou através do
                Serviço. As bases legais para o processamento de dados pessoais
                do CRM Microsistec são principalmente que o processamento é
                necessário para fornecer o Serviço de acordo com os Termos de
                Serviço e que o processamento é realizado nos interesses
                legítimos do CRM Microsistec, que são explicados na seção "Como
                Usamos as Informações que Coletamos" desta Política. Também
                podemos processar dados com o seu consentimento, solicitando-os
                conforme apropriado.
              </p>

              <h4>2.1 Informações fornecidas pelo usuário.</h4>
              <p>
                Quando você usa o Serviço, como Usuário ou Visitante, você pode
                fornecer e podemos coletar Dados Pessoais. Exemplos de Dados
                Pessoais incluem nome, endereço de e-mail, endereço para
                correspondência, número de telefone celular e cartão de crédito
                ou outras informações de faturamento. Os Dados Pessoais também
                incluem outras informações, como área geográfica ou
                preferências, quando essas informações estão vinculadas a
                informações que identificam um indivíduo específico. Você pode
                nos fornecer Dados Pessoais de várias maneiras no Serviço. Por
                exemplo, quando você se registra em uma conta, usa o Serviço,
                publica dados do cliente, interage com outros usuários do
                Serviço por meio de recursos de comunicação ou de mensagens ou
                envia solicitações relacionadas ao atendimento ao cliente.
              </p>

              <h4>2.2 Informações Coletadas por Clientes.</h4>
              <p>
                Um cliente ou usuário pode armazenar ou fazer o upload para os
                dados do cliente de serviço. O CRM Microsistec não tem relação
                direta com os indivíduos cujos Dados Pessoais são hospedados
                como parte dos Dados do Cliente. Cada Cliente é responsável por
                fornecer aviso aos seus clientes e terceiros sobre o propósito
                pelo qual o Cliente coleta seus Dados Pessoais e como esses
                Dados Pessoais são processados no ou através do Serviço como
                parte dos Dados do Cliente.
              </p>

              <h4>2.3 Informações "coletadas automaticamente".</h4>
              <p>
                Quando um usuário ou visitante usa o serviço, podemos registrar
                automaticamente determinadas informações do dispositivo do
                usuário ou do visitante usando vários tipos de tecnologia,
                incluindo cookies, "clear gifs" ou "web beacons". informações
                coletadas automaticamente podem incluir endereço IP ou outro
                endereço de dispositivo ou ID, navegador da web e / ou tipo de
                dispositivo, páginas da web ou sites visitados antes ou logo
                após o uso do Serviço, as páginas ou outro conteúdo que o
                Usuário ou Visitante visualiza ou interage com o Serviço e as
                datas e horários da visita, acesso ou uso do Serviço.Também
                podemos usar essas tecnologias para coletar informações sobre
                uma interação do Visitante ou do Usuário com mensagens de
                e-mail, como se o Visitante ou Usuário abrir, clica ou encaminha
                uma mensagem. Essas informações são coletadas de todos os
                usuários e visitantes.
              </p>

              <h4>2.4 Serviços Integrados.</h4>
              <p>
                Você pode ter a opção de acessar recursos do nosso serviço
                através do uso de seu nome de usuário e senhas para determinados
                serviços fornecidos por terceiros (cada um, um "Serviço
                Integrado"), como por meio do uso de sua Conta do Google ou caso
                contrário, tem a opção de autorizar um Serviço Integrado para
                fornecer Dados Pessoais ou outras informações para nós. Ao nos
                autorizar a nos conectar com um Serviço Integrado, você nos
                autoriza a acessar e armazenar
              </p>

              <h4>2.5 Informações de outras fontes.</h4>
              <p>
                Podemos obter informações, incluindo Dados Pessoais, de
                terceiros e outras fontes além do Serviço, como nossos
                parceiros, anunciantes, agências de classificação de crédito e
                Serviços Integrados. Se combinarmos ou associarmos informações
                de outras fontes a Dados Pessoais que coletamos por meio do
                Serviço, trataremos as informações combinadas como Dados
                Pessoais de acordo com esta Política.
              </p>

              <h3>3. COMO USAMOS AS INFORMAÇÕES QUE COLETAMOS</h3>
              <p>
                Usamos as informações coletadas de diversas maneiras para
                fornecer o Serviço e operar nossos negócios, incluindo o
                seguinte:
              </p>

              <h4>3.1 Operações</h4>
              <p>
                Usamos as informações - além dos Dados do Cliente - para operar,
                manter, aprimorar e fornecer todos os recursos do Serviço, para
                fornecer os serviços e as informações que você solicita, para
                responder a comentários e perguntas e fornecer suporte aos
                usuários do Serviço. Nós processamos os Dados do Cliente apenas
                de acordo com as instruções fornecidas pelo Cliente ou Usuário
                aplicável.
              </p>

              <h4>3.2 Melhorias</h4>
              <p>
                Usamos as informações para entender e analisar as tendências e
                preferências de uso de nossos visitantes e usuários, para
                melhorar o serviço e para desenvolver novos produtos, serviços,
                recursos e funcionalidades. Se este propósito exigir que o CRM
                Microsistec processe Dados do Cliente, os dados serão usados
                apenas de forma anônima ou agregada.
              </p>

              <h4>3.3 Comunicações</h4>
              <p>
                Podemos usar o endereço de e-mail de um Visitante ou outro
                usuário - que não seja Dados do Cliente - para contatar esse
                Visitante ou Usuário (i) para fins administrativos, como
                atendimento ao cliente, para tratar violação de propriedade
                intelectual, violação de privacidade ou difamação relacionados a
                os Dados do Cliente ou Dados Pessoais publicados no Serviço ou
                (ii) com atualizações sobre promoções e eventos, relacionados a
                produtos e serviços oferecidos por nós e por terceiros com quem
                trabalhamos. Você pode cancelar o recebimento de qualquer
                comunicação promocional conforme descrito abaixo em "Suas
                opções".
              </p>

              <h4>3.4 Cookies e Tecnologias de Rastreamento</h4>
              <p>
                Usamos informações coletadas automaticamente e outras
                informações coletadas no Serviço por meio de cookies e
                tecnologias semelhantes para: (i) personalizar nosso Serviço,
                como lembrar as informações de um Usuário ou Visitante, para que
                o Usuário ou Visitante não tenha que reinseri-lo durante um
                visita ou em visitas subsequentes; (ii) fornecer anúncios,
                conteúdo e informações personalizados; (iii) monitorar e
                analisar a eficácia das atividades de Marketing de Serviços e de
                terceiros; (iv) monitorar as métricas de uso agregado do site,
                como o número total de visitantes e as páginas visualizadas; e
                (v) rastrear suas inscrições, envios e status em quaisquer
                promoções ou outras atividades no Serviço. Você pode obter mais
                informações sobre cookies, visitando
                http://www.allaboutcookies.org.
              </p>

              <h4>3.5 Analytics</h4>
              <p>
                Usamos o Google Analytics para avaliar e avaliar o acesso e o
                tráfego na área pública do site e criamos relatórios de
                navegação do usuário para nossos administradores do site. O
                Google opera de forma independente de nós e tem sua própria
                política de privacidade, que recomendamos que você analise. O
                Google pode usar as informações coletadas pelo Google Analytics
                para avaliar a atividade dos usuários e visitantes em nosso
                site. Para mais informações, consulte Privacidade e
                compartilhamento de dados do Google Analytics.
              </p>
              <p>
                Tomamos medidas para proteger as informações técnicas coletadas
                pelo uso do Google Analytics. Os dados coletados serão usados
                apenas em uma base de necessidade de conhecimento para resolver
                problemas técnicos, administrar o Site e identificar as
                preferências do visitante; mas neste caso, os dados estarão em
                forma não identificável. Nós não usamos nenhuma dessas
                informações para identificar visitantes ou usuários.
              </p>

              <h3>4. A QUEM DIVULGAMOS INFORMAÇÕES</h3>
              <p>
                Exceto conforme descrito nesta Política, não divulgaremos
                intencionalmente os Dados Pessoais ou os Dados do Cliente que
                coletamos ou armazenamos no Serviço para terceiros sem o
                consentimento do Visitante, Usuário ou Cliente aplicável.
                Podemos divulgar informações a terceiros se você consentir em
                fazer isso, bem como nas seguintes circunstâncias:
              </p>

              <h4>4.1 Informação Irrestrita</h4>
              <p>
                Qualquer informação que você voluntariamente escolher incluir em
                uma Área Pública do Serviço, como uma página de perfil público,
                website, estará disponível para qualquer Visitante ou Usuário
                que tenha acesso a esse conteúdo.
              </p>

              <h4>4.2 Informação não identificável pessoalmente</h4>
              <p>
                Podemos garantir que determinadas informações coletadas
                automaticamente, agregadas ou de outra forma não identificáveis
                pessoalmente, sejam disponibilizadas a terceiros para diversos
                fins, incluindo (i) o cumprimento de várias obrigações de
                relatórios; (ii) para fins comerciais ou de marketing; ou (iii)
                ajudar essas partes a entender os interesses, hábitos e padrões
                de uso de nossos Clientes, Usuários e Visitantes de determinados
                programas, conteúdos, serviços e / ou funcionalidades
                disponíveis por meio do Serviço.
              </p>

              <h4>4.3 Cumprimento da Lei, Processo Legal e Compliance</h4>
              <p>
                Podemos divulgar Dados Pessoais ou outras informações, se
                exigido por lei ou na crença de boa fé de que tal ação é
                necessária para cumprir as leis aplicáveis, em resposta a uma
                ordem judicial válida, judicial ou outra intimação ou mandado do
                governo, ou de outra forma cooperar com as autoridades policiais
                ou outras agências governamentais.
              </p>
              <p>
                Também nos reservamos o direito de divulgar Dados Pessoais ou
                outras informações que acreditamos, de boa fé, apropriadas ou
                necessárias para (i) tomar precauções contra responsabilidade,
                (ii) proteger a nós mesmos ou outras pessoas contra usos ou
                atividades fraudulentos, abusivos ou ilegais. (iii) investigar e
                defender-nos contra quaisquer reclamações ou alegações de
                terceiros, (iv) proteger a segurança ou integridade do Serviço e
                quaisquer instalações ou equipamentos utilizados para
                disponibilizar o Serviço, ou (v) proteger nossa propriedade ou
                outra propriedade legal direitos, aplicar nossos contratos ou
                proteger os direitos, propriedade ou segurança de terceiros.
              </p>
              <p>
                O Usuário é o proprietário dos dados e está apto a adicionar,
                excluir ou modificar quaisquer informações que estiverem ligadas
                ao seu perfil de usuário no CRM Microsistec, solicitar a
                exclusão das informações referente à sua instância de dados, e
                por isso o Usuário declara estar ciente e concorda com a coleta,
                armazenamento, tratamento, processamento e uso das Informações
                enviadas e/ou transmitidas pelo Usuário nos termos estabelecidos
                nestes Termos de Uso e Política de Privacidade.
              </p>

              <h4>4.4 Mudança de Propriedade</h4>
              <p>
                Informações sobre Usuários e Visitantes, incluindo Dados
                Pessoais, podem ser divulgadas e transferidas para um
                adquirente, sucessor ou cessionário como parte de qualquer
                fusão, aquisição, financiamento de dívida, venda de ativos ou
                transação similar, bem como no caso de uma insolvência, falência
                ou concordata em que as informações são transferidas para um ou
                mais terceiros como um de nossos ativos comerciais e somente se
                o destinatário dos Dados do Usuário ou Visitante se comprometer
                com uma Política de Privacidade que tenha termos
                substancialmente consistentes com esta Política de Privacidade.
              </p>
              <p>
                Os Dados do Cliente podem ser física ou eletronicamente
                transferidos para um adquirente, sucessor ou cessionário como
                parte de qualquer fusão, aquisição, financiamento de dívida,
                venda de ativos ou transação semelhante, bem como no caso de
                insolvência, falência ou concordata em quais informações são
                transferidas para um ou mais terceiros como um de nossos ativos
                comerciais, com o único propósito de continuar a operação do
                Serviço, e somente se o destinatário dos Dados do Cliente se
                comprometer com uma Política de Privacidade que tenha termos
                substancialmente consistentes com este Política de Privacidade.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
