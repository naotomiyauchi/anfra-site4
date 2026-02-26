"use client";

import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const companyInfo = [
  { label: "会社名", value: "株式会社 Corporate" },
  { label: "所在地", value: "〒100-0001 東京都千代田区千代田1-1" },
  { label: "設立", value: "2010年4月" },
  { label: "事業内容", value: "システム開発、クラウド導入、DX支援、コンサルティング" },
];

export default function CompanySection() {
  return (
    <Section id="company" className="py-24 lg:py-40 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Company
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            会社情報
          </h2>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-400 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full">
            <tbody className="divide-y divide-gray-400">
              {companyInfo.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-8 py-6 text-sm font-semibold text-gray-900 w-1/3">
                    {row.label}
                  </td>
                  <td className="px-8 py-6 text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </Section>
  );
}
