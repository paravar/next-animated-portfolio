'use client'

import { motion } from 'framer-motion'

export default function TestPage() {
    return (
        <div className='h-full flex items-center justify-center'>
            <motion.div
                className='w-96 h-96 bg-red-400 rounded'
                initial={{ x: -100 }}
                animate={{ x: 100 }}
            ></motion.div>
        </div>
    )
}