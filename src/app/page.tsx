'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'

import { api } from '../libs/axios'

import logoImg from '../assets/logo.svg'
import avatarsImg from '../assets/avatars.png'
import previewImg from '../assets/preview.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
    const [pollTitle, setPollTitle] = useState<string>('')
    const [userCount] = useState<number>(0)
    const [pollCount] = useState<number>(0)
    const [guessCount] = useState<number>(0)

    const createPoll = async (event: FormEvent) => {
        event.preventDefault()

        try {
            const response = await api.post('/polls', { title: pollTitle })
            const { code } = response.data

            await navigator.clipboard.writeText(code) // Copia para area de transferencia do usuario...

            alert('Bolão criado com sucesso, o código foi copiado para área de transferência!')
            setPollTitle('')
        } catch (error) {
            alert('Falha ao criar o bolão, tente novamente!')
        }
    }

    return (
        <div className="container min-h-screen mx-auto p-8 flex items-center justify-center gap-28 flex-col lg:flex-row">
            <main>
                <Image src={logoImg} alt="NLW Copa" />

                <h1 className="mt-14 font-bold leading-tight text-white text-3xl sm:text-5xl">
                    Crie seu próprio bolão da copa e compartilhe com amigos!
                </h1>

                <div className="mt-10 flex items-center gap-2">
                    <Image src={avatarsImg} alt="" />

                    <strong className="text-gray-100 text-xl">
                        <span className="text-green-500"> +{userCount} </span>
                        pessoas já estão usando
                    </strong>
                </div>

                <form onSubmit={createPoll} className="mt-10 flex gap-2 flex-col sm:flex-row">
                    <input
                        type="text"
                        required
                        placeholder="Qual o nome do seu bolão?"
                        className="flex-1 px-6 py-4 rounded border border-gray-600 bg-gray-800 text-sm text-gray-100"
                        value={pollTitle}
                        onChange={(event) => setPollTitle(event.target.value)}
                    />

                    <button
                        type="submit"
                        className="px-6 py-4 rounded bg-yellow-500 font-bold uppercase text-sm text-gray-900 hover:bg-yellow-700"
                    >
                        Criar meu bolão
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
                </p>

                <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-start gap-10 flex-col sm:flex-row text-gray-100">
                    <div className="flex items-center justify-center sm:justify-start gap-6">
                        <Image src={iconCheckImg} alt="" />

                        <div className="flex flex-col">
                            <span className="font-bold text-2xl"> +{pollCount} </span>
                            <span> Bolões criados </span>
                        </div>
                    </div>

                    <div className="w-px h-14 bg-gray-600 hidden sm:block"></div>

                    <div className="flex items-center justify-center sm:justify-start gap-6">
                        <Image src={iconCheckImg} alt="" />

                        <div className="flex flex-col">
                            <span className="font-bold text-2xl"> +{guessCount} </span>
                            <span> Palpites enviador </span>
                        </div>
                    </div>
                </div>
            </main>

            <Image quality={100} src={previewImg} alt="Dois celulares exibindo uma prévia da aplicação móvel da NLW Copa" />
        </div>
    )
}
