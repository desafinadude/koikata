import Section from '../components/demo/Section'
import ColorPalette from '../components/demo/ColorPalette'
import TypographyDemo from '../components/demo/TypographyDemo'
import ButtonDemo from '../components/demo/ButtonDemo'
import CardDemo from '../components/demo/CardDemo'
import FormDemo from '../components/demo/FormDemo'
import BadgeAlertDemo from '../components/demo/BadgeAlertDemo'

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl space-y-10">
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold">KoiKata</h1>
        <p className="text-base-content/60 mt-2">Design System Demo</p>
      </div>

      <Section title="Color Palette">
        <ColorPalette />
      </Section>

      <Section title="Typography">
        <TypographyDemo />
      </Section>

      <Section title="Buttons">
        <ButtonDemo />
      </Section>

      <Section title="Cards">
        <CardDemo />
      </Section>

      <Section title="Badges & Alerts">
        <BadgeAlertDemo />
      </Section>

      <Section title="Form Elements">
        <FormDemo />
      </Section>
    </div>
  )
}
