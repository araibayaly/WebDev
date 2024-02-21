export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Round Lab крем Birch Juice Moisturizing SPF50+ для лица 50 мл',
    price: 4890,
    description: 'Увлажняющий солнцезащитный крем Round Lab Birch Juice Moisturizing Sun Cream SPF50+ PA++++ на стабильных химических фильтрах нового поколения эффективно защищает кожу от агрессивных солнечных лучей, поддерживает оптимальный уровень увлажненности, укрепляет защитный барьер.',
    link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h4a/64516795826206.jpg?format=preview-large',
    rating: 5
  },
  {
    id: 2,
    name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer крем 100 мл',
    price: 5898,
    description: 'Увлажняющий крем с комплексом пробиотиков Dr.Ceuracle Pro Balance Biotics Moisturiser интенсивно восстанавливает кожу, укрепляет ее иммунитет, образует защитный барьер, оберегающий от агрессивного воздействия окружающей среды. ',
    link: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h92/64090050527262.jpg?format=gallery-medium',
    rating: 4
  },
  {
    id: 3,
    name: 'The Ordinary Niacinamide 10%+Zinc 1% сыворотка 30 мл',
    price: 3332,
    description: 'Niacinamide 10% + Zinc 1% - это сыворотка с 10% витамином В3 и цинком в концентрации 1%. Витамин В3 уменьшает видимость увеличенных сальных желез (пор), улучшает гидратацию кожи и предотвращает изменение цвета, которое часто происходит при лечении дерматологических угрей.',
    link: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/ha4/83674018021406.jpg?format=gallery-medium',
    rating : 3
  },
  {
    id: 4,
    name: 'Маска для лица Farmstay тканевая Real Mango 23 мл',
    price: 180,
    description: 'Маска с экстрактом манго насыщает кожу витаминами, сохраняет необходимый уровень увлажнения и возвращает природное сияние тусклой и уставшей коже!',
    link: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-real-mango-23-ml-100385469/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h8d/63880898510878.jpg?format=gallery-medium',
    rating: 4
  },
  {
    id: 5,
    name: 'Heimish All Clean Green Foam пенка 150 мл',
    price: 2509,
    description: 'Очищающая пенка от компании Heimish послужит идеальным выбором для 2-го этапа ежедневного очищения кожи. Пенка прекрасно очистит поры от пыли, грязи, остатков декоративной косметики и кожного себума.',
    link: 'https://kaspi.kz/shop/p/heimish-all-clean-green-foam-penka-150-ml-100397062/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/hf4/63898374340638.jpg?format=gallery-medium',
    rating: 4
  },
  {
    id: 6,
    name: 'Anua Heartleaf Pore Control Cleansing Oil гидрофильное масло 200 мл',
    price: 7124,
    description: 'Гидрофильное масло Anua Heartleaf Pore Control Cleansing Oil подходит для ежедневного глубокого очищения кожи, даже для проблемной кожи с акне. ',
    link: 'https://kaspi.kz/shop/p/anua-heartleaf-pore-control-cleansing-oil-gidrofil-noe-maslo-200-ml-114393219/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h26/84993669890078.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 7,
    name: 'Round Lab крем 1025 Dokdo Cream для лица 80 мл',
    price: 8230,
    description: 'Интенсивно увлажняет вашу кожу в течение 24 часов, укрепляет кожный барьер и эпидермис, устраняя сухость.',
    link: 'https://kaspi.kz/shop/p/round-lab-krem-1025-dokdo-cream-dlja-litsa-80-ml-108549053/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h2f/64904119222302.jpg?format=gallery-large',
    rating: 5
  },
  {
    id: 8,
    name: 'Skin1004 Madagascar Centella Light гидрофильное масло 200 мл',
    price: 5999,
    description: 'Успокаивающее гидрофильное масло с центеллой SKIN1004 Madagascar Centella Light Cleansing Oil деликатно удаляет даже пигментированный макияж, а также мягко, но эффективно очищает поры, предотвращая их закупорку и появление комедонов.',
    link: 'https://kaspi.kz/shop/p/skin1004-madagascar-centella-light-gidrofil-noe-maslo-200-ml-103907513/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h27/82994195300382.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 9,
    name: 'Round Lab 1025 Dokdo Cleansing пенка 150 мл',
    price: 4178,
    description: 'Мягкая пенка для умывания с морской водой Round Lab1025 Dokdo Cleanser подходит для деликатного очищения сухой и чувствительной кожи. Нежно удаляет все загрязнения, не провоцирует появления сухости и стянутости, сохраняет кожу увлажнённой даже после умывания.',
    link: 'https://kaspi.kz/shop/p/round-lab-1025-dokdo-cleansing-penka-150-ml-105850453/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h25/64365023625246.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 10,
    name: 'LAGOM Cellus Mild Moisture Cream крем 80 мл',
    price: 8294,
    description: 'Лёгкий увлажняющий крем с мочевиной Lagom Cellus Mild Moisture Cream в короткие сроки устраняет сухость и обезвоженность, не перегружая кожу. Насыщает клетки влагой и поддерживает высокий уровень увлажненности в течение дня. ',
    link: 'https://kaspi.kz/shop/p/lagom-cellus-mild-moisture-cream-krem-80-ml-100676372/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h3a/64088126717982.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 11,
    name: 'Beauty Of Joseon Glow Serum Propolis + Niacinamide сыворотка 30 мл',
    price: 4699,
    description: 'Активная сыворотка для сияния кожи Beauty of Joseon Glow Serum: Propolis+Niacinamide наполняет необходимыми питательными компонентами, избавляет от сухости и интенсивно увлажняет.',
    link: 'https://kaspi.kz/shop/p/beauty-of-joseon-glow-serum-propolis-niacinamide-syvorotka-30-ml-101389471/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hae/84792934039582.jpg?format=gallery-medium',
    rating: 3
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/