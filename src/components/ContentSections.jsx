"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { MessageSquare } from "lucide-react";

export default function ContentSections() {
  const createWhatsappLink = (msg) => {
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="my-10 max-w-7xl mx-auto px-4 space-y-12 text-right text-slate-800">
      
      {/* Section 1: Kitchens */}
      <div id="kitchens" className="space-y-6 scroll-mt-24 border-b border-slate-200 pb-10">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[400px] rounded overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/kitchen.webp"
            alt="شراء مطابخ مستعملة بالمدينة المنورة"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 border-r-4 border-[#0284c7] pr-3">
          شراء مطابخ مستعملة بالمدينة المنورة
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            تعد المطابخ من أكثر الاثاث التي يتم استخدامها في المنزل وبالتالي تحتاج إلى التغير دائما نتيجة تراكم الزيوت عليها لهذا نوفر لكم خدمة شراء مطابخ والتخلص من المطابخ وبأعلى سعر. شراء الاثاث المستعمل بالمدينة المنورة نشتري الأثاث المستعمل مثل الأجهزة الكهربائية وغرف النوم والثلاجات والمجالس والكنب بأفضل الأسعار. اذا اردت بيع اثاثك المستعمل اتصل بنا فورا وسيصلك مندوبنا ونقيم سعر الأغراض وعند الاتفاق الدفع فوري ثم نقلها فورا دون تأخير او ازعاج.
          </p>
          <p>
            تعد خدمة <strong>شراء مطابخ مستعملة بالمدينة المنورة</strong> حلاً مثالياً للكثير من الأفراد الذين يرغبون في تجديد منازلهم أو الانتقال إلى سكن جديد، حيث تتيح لهم التخلص من مطابخهم القديمة بطريقة احترافية ومجزية مادياً. وتتميز شركتنا في هذا المجال بتقديم تقديرات سعرية عادلة بناءً على حالة المطبخ، نوع الخشب أو الألمنيوم، وجودة الإكسسوارات الملحقة به.
          </p>
          <p>
            تتميز شركتنا بتقديم خدمات متكاملة تشمل الفك، النقل، والتركيب، مما يرفع العبء عن كاهل البائع. فعندما يقرر العميل بيع مطبخه القديم، تقوم شركتنا بإرسال فنيين مختصين لتقييم المطبخ بناءً على معايير دقيقة، أهمها نوع الخامة المستخدمة؛ سواء كانت من الألمنيوم الـ "كلادينج" المتين، أو الخشب الطبيعي، أو مطابخ "الفورميكا". كما يتم فحص سلامة المفصلات، والرفوف الداخلية، وحالة الرخام الطبيعي أو الصناعي، لضمان تقدير سعر عادل يرضي الطرفين.
          </p>
        </div>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع / تقييم مطابخ مستعملة بالمدينة المنورة.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 2: AC Units */}
      <div id="acs" className="space-y-6 scroll-mt-24 border-b border-slate-200 pb-10">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[400px] rounded overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/ac_stack.webp"
            alt="شراء مكيفات مستعملة بالمدينة المنورة"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#0284c7] text-slate-900 border-r-4 border-[#0284c7] pr-3">
          شراء مكيفات مستعملة بالمدينة المنورة
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            تستهدف شركتنا شراء كافة أنواع أجهزة التبريد، بما في ذلك مكيفات السبلت (Split)، مكيفات الشباك (Window)، والمكيفات المركزية والدولابية. وتعتمد عملية التثمين على معايير فنية صارمة تضمن للعميل سعراً عادلاً، حيث يتم فحص قوة الكمبروسر (الضاغط)، نظافة الفلاتر والوحدات الداخلية، ومدى كفاءة غاز التبريد، بالإضافة إلى المظهر الخارجي للجهاز وخلوه من الصدأ الناتج عن الرطوبة.
          </p>
          <p>
            إذا كنت تحتاج إلى شركة شراء مكيفات مستعملة بالمدينة المنورة بأفضل الأسعار، أو شراء مكيفات خربانة، حيث يعد التكييف من أهم الأجهزة المنزلية التي لا غنى عنها خاصة مع ارتفاع درجات الحرارة فنحن نشتري جميع أنواع المكيفات الشباك والمكيفات المركزي. يرغب بعض العملاء في اقتناء مكيف جديد، لذلك يبحثون عن شركة شراء الاثاث المستعمل بالمدينة المنورة متخصصة في شراء مكيفات تمنح أسعار عادلة للجميع، لذلك يمكن التواصل معنا للحصول على عروض ممتازة عند بيع المكيف القديم.
          </p>
          <p>
            شراء المكيفات السكراب مهما كانت حالتها ويتم التعامل مع كل مكيف حسب حالته حيث أن هناك مكيفات نقوم بتقطيعها وبيعها كقطع غيار والمكيفات ذات الحالة الممتازة نقوم ببيعها مرة أخرى والمكيفات ذات العيوب الطفيفة نقوم بمعالجتها من خلال فريق من المهندسين والفنيين المحترفين في التعامل مع جميع أنواع المكيفات. اتصل الآن للحصول على أفضل خدمة بيع وشراء مكيفات.
          </p>
        </div>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع / تقييم مكيفات مستعملة (سبليت / شباك).")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 3: All Furniture */}
      <div id="furniture" className="space-y-6 scroll-mt-24 border-b border-slate-200 pb-10">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[400px] rounded overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/furniture_buyer.webp"
            alt="حقين الأثاث المستعمل"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 border-r-4 border-[#0284c7] pr-3">
          حقين الأثاث المستعمل
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            شراء الاثاث المستعمل بالمدينة المنورة نشتري جميع انواع العفش المستعمل مثل غرف النوم والمكيفات الخربانة والأجهزة الكهربائية والرياضية والمطابخ الألمنيوم ومعدات المطاعم والمقاهي والصالونات وما إلى ذلك. عزيزي العميل نحن نشتري اثاث مستعمل المكتبي والمنزلي والمطابخ والكنب والسجاد والموكيت وغرف النوم بأعلى الأسعار.
          </p>
          <p>
            نشتري الاثاث المستعمل عزيزي العميل عندما تقرر بيع اثاث المنزل لديك ومقتنياتك الثمينة التي لا تقدر بثمن فقط عليك الاتصال بنا حيث ان لدينا الخبرة والمختصين في شراء الاثاث المستعمل بالمدينة المنورة والتي قدمنا خلالها خدماتنا الى عملائنا ودائما نسعى لتحقيق رغبتهم.
          </p>
          <p>
            نشتري جميع الاثاث المستعمل مهما كانت حالته أو نوعه. وذلك لأننا نمتلك جميع الإمكانيات والمستلزمات اللازمة لصيانة وترميم أي عيوب باحترافية. نقدم لكم كافة الخدمات التي تحتاجها لبيع الاثاث المستعمل حيث نقوم بشراء جميع انواع الاثاث المستعمل مثل غرف النوم المطابخ الاجهزة الكهربائية السجاد المجالس الكنب المكيفات.
          </p>
        </div>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع / تقييم أثاث مستعمل بالمدينة المنورة.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 4: Display Freezer & Contact Numbers */}
      <div id="numbers" className="space-y-6 scroll-mt-24 border-b border-slate-200 pb-10">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[400px] rounded overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/display_freezer.webp"
            alt="ارقام شراء الاثاث المستعمل"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 border-r-4 border-[#0284c7] pr-3">
          ارقام شراء الاثاث المستعمل
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            تعتبر <strong>أرقام شراء الاثاث المستعمل</strong> بالمدينة المنورة هي المفتاح الأول للوصول إلى خدمات سريعة وموثوقة تضمن لك التخلص من العفش الزائد والحصول على مقابل مادي عادل في آن واحد. توفر هذه الأرقام اتصالاً مباشراً مع "حقين الأثاث" والشركات المتخصصة التي تتيح معاينة فورية عبر "الواتساب" أو الزيارة المنزلية، مما يوفر على العميل عناء الذهاب للمحلات. نتميز بتقديم حزمة متكاملة من الخدمات بمجرد الاتصال، تشمل:
          </p>
          <ul className="list-disc list-inside space-y-2 pr-2 text-slate-800 font-semibold">
            <li>التسعير الفوري: إعطاء عرض سعر تقريبي بناءً على الصور المرسلة عبر الجوال.</li>
            <li>الاستجابة السريعة: الوصول إلى منزلك في غضون دقائق قليلة في مختلف أحياء المدينة (مثل العزيزية، الهجرة، والشريبات).</li>
            <li>الفك والنقل المجاني: التزام الشركة بإحضار العمالة والشاحنات دون تحميل العميل أي رسوم إضافية.</li>
          </ul>
        </div>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في التواصل لمعاينة وتسعير أثاث مستعمل.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 5: Sofas & Charity */}
      <div className="space-y-6 border-b border-slate-200 pb-10">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[400px] rounded overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/sofa_buyer.webp"
            alt="نشتري الكنب والمجالس"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 border-r-4 border-[#0284c7] pr-3">
          نشتري الكنب والمجالس
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            تُعتبر خدمات <strong>شراء الكنب والمجالس</strong> المستعملة بالمدينة المنورة من أكثر الخدمات طلباً، نظراً للأهمية الكبيرة التي يوليها سكان المدينة لغرف الاستقبال والمجالس، والتي تعكس كرم الضيافة العربي. ومع رغبة الكثيرين في تحديث ديكورات منازلهم واقتناء أحدث تشكيلات "الكنب المتصل" أو "الأطقم الكلاسيكية"، تبرز الحاجة إلى جهات محترفة مثل شركتنا لشراء المجالس القديمة بأسعار عادلة، مما يمنح العميل فرصة ذهبية لتمويل جزء كبير من تكلفة المجلس الجديد بدلاً من بقاء القديم كعبء في المنزل.
          </p>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
          جمعية الاثاث المستعمل بالمدينة المنورة
        </h3>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            تُشكل <strong>جمعية الأثاث المستعمل بالمدينة المنورة</strong> ركيزة أساسية في العمل الخيري والاجتماعي داخل طيبة الطيبة. تهدف هذه الجمعيات إلى مد جسور التكافل بين المتبرعين والأسر المحتاجة، من خلال استقبال فائض الأثاث المنزلي والمكتبي، وإعادة تأهيله وتوزيعه، مما يحول قطع الأثاث المهملة إلى وسيلة لإدخال السرور على بيوت المتعففين.
          </p>
          <p>
            شراء الاثاث المستعمل بالمدينة المنورة تهتم بشراء كل أنواع العفش المستعمل الذي لم تعد بحاجة إليه بكل أشكاله سواء كانت موبيليات خشبية أو أجهزة أو مكيفات وغيرها من أنواع الأثاث والمقتنيات، ومن خلال شركتنا نراعي الله ولا نبخس ثمن الأشياء التي نشتريها ونعلم كيف نعطي كل ذي حق حقه بطريقة مرضية.
          </p>
        </div>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع / تقييم كنب ومجالس مستعملة.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 6: Bedrooms */}
      <div id="bedrooms" className="space-y-6 scroll-mt-24 border-b border-slate-200 pb-10">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[400px] rounded overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/bedroom_buyer.webp"
            alt="نشتري غرف نوم مستعملة بالمدينة"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 border-r-4 border-[#0284c7] pr-3">
          نشتري غرف نوم مستعملة بالمدينة
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          <p>
            تشكل خدمة <strong>شراء غرف نوم مستعملة بالمدينة المنورة</strong> خياراً استراتيجياً للكثير من العائلات التي تنشد التغيير والتميز في تصميمات منازلها، حيث يوفر سوق حراج المستعمل في المدينة تشكيلة واسعة تضم غرف النوم المودرن، الكلاسيك، وغرف نوم الأطفال. تنبع أهمية هذه التجارة من كون غرف النوم تمثل القطع الأثاثية الأكبر حجماً والأعلى قيمة في المنزل.
          </p>
          <p>
            شراء غرف نوم مستعملة بكل أشكالها المختلفة الكلاسيكية أو المودرن وغرف نوم ايكيا المستعملة ستأخذ أفضل سعر فقط تواصل معنا فنحن من الشركات التي يفضل التعامل معها سارع بطلب الخدمة.
          </p>
        </div>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع / تقييم غرف نوم مستعملة.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 7: Haraj Section */}
      <div id="haraj" className="space-y-6 scroll-mt-24 border-b border-slate-200 pb-10">
        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 border-r-4 border-[#0284c7] pr-3">
          شراء اثاث مستعمل حراج
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
          يُمثل <strong>شراء اثاث مستعمل حراج</strong> المنصة الأكبر والمقصد الأول لكل من يبحث عن بيع أو شراء الأثاث بأسعار تنافسية، حيث يجمع هذا السوق الضخم بين العرض والطلب في حلقة وصل حيوية تضم آلاف القطع من غرف النوم، الكنب، والمطابخ. وتعتمد فكرة الحراج على "التسعير المباشر" وفقاً لآليات السوق المفتوح، مما يتيح للبائعين الحصول على قيم نقدية فورية لأثاثهم.
        </p>
        {/* Button */}
        <div className="pt-2">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع أثاث مستعمل عبر حراج المدينة.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 8: Dark Navy Banner Box */}
      <div className="bg-[#091124] text-white rounded p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Image */}
          <div className="md:col-span-6 relative h-60 sm:h-72 rounded overflow-hidden border border-slate-700">
            <Image
              src="/images/old_oven.webp"
              alt="بيع وشراء اثاث مستعمل"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#eab308]">
              بيع وشراء اثاث مستعمل
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              نقدم لجميع العملاء أفضل محل شراء وبيع الاثاث المستعمل بالمدينة المنورة فمن خلالنا فقط تستطيع التخلص من كافة قطع الاثاث القديم، مهما كانت عيوبه، نساعدك في الحصول على المزيد من المال لتجديد أثاث منزلك، وشراء قطع أثاث جديدة، فلا تتردد بالتواصل معنا.
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="pt-2 text-center md:text-right">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في بيع وشراء أثاث مستعمل.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

      {/* Section 9: Metallic Gold/Brown Banner Box */}
      <div className="bg-[#5c3d0b] text-white rounded p-6 sm:p-8 shadow-2xl border border-amber-900 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Content */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-200">
              بيع وشراء اثاث مستعمل
            </h2>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              نقدم لجميع العملاء أفضل محل شراء وبيع الاثاث المستعمل بالمدينة المنورة فمن خلالنا فقط تستطيع التخلص من كافة قطع الاثاث القديم، مهما كانت عيوبه، نساعدك في الحصول على المزيد من المال لتجديد أثاث منزلك، وشراء قطع أثاث جديدة، فلا تتردد بالتواصل معنا.
            </p>
          </div>
          {/* Image */}
          <div className="md:col-span-6 relative h-60 sm:h-72 rounded overflow-hidden border border-amber-800">
            <Image
              src="/images/refrigerator.webp"
              alt="بيع وشراء اثاث مستعمل"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
        {/* Button */}
        <div className="pt-2 text-center md:text-right">
          <a
            href={createWhatsappLink("السلام عليكم، أرغب في الاستفسار عن بيع وشراء أثاث مستعمل.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded text-base sm:text-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>اطلب الآن عبر الواتساب</span>
          </a>
        </div>
      </div>

    </section>
  );
}
