import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router'; // Importar useRouter

const InscricaoForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [evento, setEvento] = useState('');
    const router = useRouter(); // Instanciando o router

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = { nome, email, telefone, evento };

        // Enviar os dados para o servidor ou API
        console.log(formData);

        // Após o envio, redirecionar para a página de pagamento
        router.push('https://gabriel980.pythonanywhere.com/'); // Mudar para a página desejada
    };

    return (
        <div>
            <header>
                <div className="barra-superior">
                    <h2>IBCD Jovens</h2>
                </div>
            </header>

            <form onSubmit={handleSubmit}>
                <section id="formulario">
                    <h2>Inscrição no Acampamento</h2>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />

                    {/* Remova o Link daqui, pois o router redirecionará para a nova página */}
                    <button type="submit" className="btn">Inscrever-se</button>
                </section>
            </form>

            <div className="barra-inferior">
                <p>&copy; 2024 IBCD Jovens | Todos os direitos reservados</p>
            </div>
        </div>
    );
};

export default InscricaoForm;
