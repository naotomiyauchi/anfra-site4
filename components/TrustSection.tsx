import Section from "./Section";
import Container from "./Container";
import Card from "./Card";
import FadeIn from "./FadeIn";

const stats = [
  {
    value: "500+",
    label: "導入企業数",
    description: "様々な業界のお客様にご利用いただいています",
  },
  {
    value: "98%",
    label: "顧客満足度",
    description: "継続率の高さが信頼の証です",
  },
  {
    value: "10年",
    label: "運用年数",
    description: "長年の実績とノウハウで安心サポート",
  },
  {
    value: "24h",
    label: "サポート体制",
    description: "365日体制でお客様をサポート",
  },
];

export default function TrustSection() {
  return (
    <Section id="trust" className="py-24 lg:py-32 bg-gray-50">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            数字で見る信頼
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            私たちの実績とお客様との信頼関係をご紹介します。
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <Card className="p-8 lg:p-10 text-center">
                <p className="text-4xl lg:text-5xl font-bold text-indigo-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
