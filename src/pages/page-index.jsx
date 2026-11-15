import Header from '../components/header'
import Seo from '../components/seo'
import Hero from '../components/hero'
import Quote from '../components/quote'
import Aquarium from '../components/aquarium'
import IzobretariumCase from '../components/izobretarium-case'
import PamyatNovomuchenikov from '../components/pamyat-novomuchenikov'
import Contacts from '../components/contacts'
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_KEYWORDS,
    DEFAULT_TITLE,
    PERSON,
    WEBSITE,
} from '../data/seo'

export default function PageIndex() {
    return (
        <>
            <Seo
                title={DEFAULT_TITLE}
                description={DEFAULT_DESCRIPTION}
                keywords={DEFAULT_KEYWORDS}
                path="/"
                jsonLd={[WEBSITE, PERSON]}
            />
            <Header />
            <Hero />
            <Quote />
            <Aquarium />
            <IzobretariumCase />
            <PamyatNovomuchenikov />
            <Contacts />
        </>
    )
}
