<template>
     <div class="treatment-single">
        <div class="treatment-single-heading">
            <h4 class="treatment-heading">Freezing Egg | Sperm | Embryo</h4>
        </div>
        <div class="treatment-section1">
            <div class="treatment-section1-left">
                <h5 class="treatment-subheading">EGG FREEZING</h5>
                <p class="treatment-content">
                    Egg freezing, also known as mature oocyte cryopreservation, is a method used to preserve 
                    reproductive potential in women.
                    <br><br>
                    Eggs are harvested from the ovaries, frozen unfertilized and stored for later use. A frozen 
                    egg can be thawed, combined with sperm in a lab and implanted in the uterus (in vitro fertilization).
                </p>
                <h5 class="treatment-subheading">WHY IT’S DONE</h5>
                <div class="treatment-image-wrapper">
                    <img src="" class="treatment-image" />
                </div>
                <div class="treatment-content">
                    Egg freezing might be an option if you’re not ready to become pregnant now but want to try to 
                    ensure your ability to get pregnant or to have a biological child in the future.<br>
                    Unlike with fertilized egg freezing (embryo cryopreservation), egg freezing doesn’t require 
                    sperm because the eggs won’t be fertilized before they’re frozen. However, you’ll need to use 
                    fertility drugs to induce ovulation so that you’ll produce multiple eggs for retrieval.
                    <span style="font-weight:700">YOU MIGHT CONSIDER EGG FREEZING IF:</span>
                    <ul class="inner-list">
                        <li>
                            You’re about to undergo treatment for cancer or another illness that may affect your 
                            future fertility potential. Certain medical treatments — such as radiation or chemotherapy 
                            — can harm your fertility. Egg freezing before treatment might allow you to have biological 
                            children at a later date.
                        </li>
                        <li>
                            You’re undergoing in vitro fertilization. If your partner isn’t able to produce 
                            sufficient sperm on the day you have your eggs retrieved, egg freezing might be needed.
                        </li>
                        <li>
                            You wish to preserve younger eggs now for future use. Freezing eggs at a younger age may 
                            help you preserve your ability to reproduce when the time is right in the future.
                        </li>
                    </ul>
                </div>
                <p class="treatment-content">
                    You can use your frozen eggs to try to conceive a biological child with sperm from a partner or 
                    a sperm donor. A donor can be known or anonymous. The embryo can also be implanted in the uterus 
                    of another person to carry the pregnancy (gestational carrier).
                </p>
                <h5 class="treatment-subheading">HOW YOU PREPARE</h5>
                <p class="treatment-content">
                    <span style="font-weight:700">
                        Before beginning the egg-freezing process, you’ll likely have some 
                        screening blood tests, including:
                    </span>
                    Ovarian reserve testing. To determine the quantity and quality of your eggs, your doctor might 
                    test the concentration of follicle-stimulating hormone (FSH) and estradiol in your blood on day 
                    three of your menstrual cycle. Results can help predict how your ovaries will respond to 
                    fertility medication. Other blood tests and an ultrasound of the ovaries may be recommended to 
                    get a more complete assessment of ovarian function.
                </p>
                <ul class="treatment-list">
                    <li>
                        Infectious disease screening. You’ll be screened for certain infectious diseases, such as HIV. 
                        Potentially infectious eggs are stored differently than are other eggs.
                    </li>
                </ul>
                <p class="treatment-content">
                    <span style="font-weight:700">
                        Egg freezing has multiple steps — ovulation induction, egg retrieval and freezing.
                    </span>
                </p>
                <h5 class="treatment-subheading">OVULATION INDUCTION</h5>
                <p class="treatment-content">
                    At the beginning of your menstrual cycle, you’ll begin treatment with synthetic hormones to 
                    stimulate your ovaries to produce multiple eggs — rather than the single egg that normally 
                    develops each month. Several different medications might be needed, including:
                </p>
                <ul class="treatment-list">
                    <li>
                        Medications for ovarian stimulation. To stimulate your ovaries, you might inject medication 
                        such as follicle-stimulating hormone or human menopausal gonadotropins.
                    </li>
                    <li>
                        Medications to prevent premature ovulation. To prevent premature ovulation, you might inject 
                        medication such as a gonadotropin-releasing hormone agonist (Lupron) or a gonadotropin-releasing 
                        hormone antagonist.<br>
                        During treatment, your doctor will have you return for follow-up visits. These visits will 
                        include having vaginal ultrasounds — a procedure that uses sound waves to create an image 
                        of the inside of your ovaries — to monitor the development of fluid-filled ovarian cysts 
                        where eggs mature (follicles). Blood tests also will be used to measure your response to 
                        ovarian-stimulation medications. Estrogen levels typically increase as follicles develop 
                        and progesterone levels remain low until after ovulation.<br>
                        When the follicles are ready for egg retrieval — generally after eight to 14 days — 
                        injections ,human chorionic gonadotropin or other medications can help the eggs mature.
                    </li>
                </ul>
                <h5 class="treatment-subheading">EGG RETRIEVAL</h5>
                <p class="treatment-content">
                    Egg retrieval is done under sedation, typically in your doctor’s office or a clinic. A common 
                    approach is transvaginal ultrasound aspiration. During this procedure, an ultrasound probe is 
                    inserted into your vagina to identify the follicles. A needle is then guided through the vagina 
                    and into a follicle. A suction device connected to the needle is used to remove the egg from 
                    the follicle. Multiple eggs can be removed from your follicles in about 15 to 20 minutes.<br>
                    After egg retrieval, you might experience cramping. Feelings of fullness or pressure might 
                    continue for weeks because your ovaries remain enlarged.
                </p>
                <div class="treatment-image-wrapper">
                    <img src="" class="treatment-image" /> 
                </div>
            </div>
            <div class="treatment-section1-right">
                <div class="book-appointment-box">
                    <div class='text'>
                        <div>
                            <span class='innertext'>Freezing-Egg|Sperm|Embryo</span>
                        </div>
                    </div>
                    <div class="book-appointment-button" :styleObject="bookAppointmentStyle" @touched="bookAppointment">
                        <drrama-button type='book-appointment-btn' text='Book Appointment' />
                    </div>
                </div>
            </div>
        </div>
        <div class="treatment-section2">
            <h5 class="treatment-subheading">FREEZING</h5>
            <p class="treatment-content">
                Shortly after your unfertilized eggs are harvested, they’re cooled to subzero temperatures to stop 
                all biological activity and preserve them for future use.<br>
                Vitrification. In this method, high initial concentrations of cryoprotectants are used in 
                combination with cooling so rapid that intracellular ice crystals don’t have time to form.
            </p>
            <h5 class="treatment-subheading">AFTER THE PROCEDURE</h5>
            <p class="treatment-content">
                Typically, you can resume normal activities within a day or two of egg retrieval. Avoid unprotected 
                sex to prevent unwanted pregnancy.<br>
                Contact your clinician if you have:
            </p>
            <ul class="treatment-list">
                <li>
                    A fever higher than 101.5 F (38.6 C).
                </li>
                <li>
                    Severe abdominal pain.
                </li>
                <li>
                    Weight gain of more than 2 pounds (0.9 kilograms) in 24 hours.
                </li>
                <li>
                    Heavy vaginal bleeding — filling more than two pads an hour.
                </li>
                <li>
                    Difficulty urinating.
                </li>
            </ul>
            <h5 class="treatment-subheading">RESULTS</h5>
            <h5 class="treatment-subheading">ICSI</h5>
            <p class="treatment-content">
                When you choose to use your frozen eggs, they’ll be thawed, fertilized with sperm in a lab, and 
                implanted in your or a gestational carrier’s uterus.<br>
                Intracytoplasmic sperm injection (ICSI). In ICSI, a single healthy sperm is injected directly 
                into each mature egg.<br>
                About 90 percent of eggs survive freezing and thawing, and about 75 percent will be successfully 
                fertilized. The chances of becoming pregnant after implantation are roughly 30 to 60 percent, 
                depending on your age at the time of egg freezing. The older you are at the time of egg freezing, 
                the lower the likelihood that you’ll have a live birth in the future.<br>
                Keep in mind that pregnancy rates might be lower when frozen eggs are used, compared with fresh 
                or frozen embryos.
            </p>
            <h5 class="treatment-subheading">OVARIAN TISSUE FREEZING</h5>
            <p class="treatment-content">
                Ovarian tissue cryopreservation (freezing) is an experimental method of fertility preservation in 
                which the outer layer of an ovary, which contains a large number of immature eggs, is taken out of 
                the body and frozen for future use. In ovarian tissue freezing process, a part of an ovary or a 
                whole ovary is surgically removed, usually by laparoscopy. In the laboratory, the ovary’s outer 
                layer (called ovarian cortex) is cut into small strips and frozen. An experimental procedure, 
                ovarian tissue freezing is for the most part performed for medically indicated fertility preservation 
                in cancer patients.When the patient is cured of the primary disease and ready to have children, 
                the ovarian strips are thawed and transplanted back into her body, either on the remaining ovary 
                or elsewhere. In most cases reported in the literature, transplanted ovarian strips regain normal 
                function of producing hormones and eggs. So far, more than 30 live births have been reported 
                worldwide after ovarian tissue freezing and re-transplantation.
            </p>
            <h5 class="treatment-subheading">BENEFITS OF OVARIAN TISSUE FREEZING</h5>
            <p class="treatment-content">
                A major advantage of ovarian tissue freezing is the number of eggs that can be frozen in “one shot.” 
                Embryo freezing and egg freezing typically result in approximately 10 eggs or embryos per freezing 
                attempt. In contrast, ovarian tissue freezing lets women freeze a vastly larger number of immature 
                eggs—hundreds to thousands—for future use. When frozen ovarian tissue is re-implanted into the body 
                and regains its functions, immature eggs that were frozen within the tissue start developing normally, 
                and become retrievable in an IVF procedure.
                <br><br>
                Unlike egg and embryo freezing, where just one cycle can take a few weeks to complete, ovarian tissue 
                freezing can be performed on very short notice. Even women who must undergo chemotherapy or radiation 
                almost immediately after diagnosis may be able to preserve their fertility using this method.
                <br><br>
                Ovarian tissue freezing is also an important method of fertility preservation for young girls. When 
                a young girl is diagnosed with cancer or other conditions requiring life-saving, ovary-toxic treatments, 
                the option of egg freezing may not yet be feasible because her eggs have not started the maturation 
                process, which starts with menarche (first menstrual period). While still considered an “experimental” 
                procedure, ovarian tissue freezing is utilized frequently for young prepubescent girls.
            </p>
            <h5 class="treatment-subheading">COUNSELING AND INFORMED CONSENT</h5>
            <p class="treatment-content">
                Patients considering ovarian tissue freezing should be thoroughly informed about risk-benefit 
                considerations, the procedure’s experimental nature and available alternative treatments. 
                Since ovarian tissue freezing is typically performed for patients facing life-threatening 
                illnesses and ovary-toxic therapies, close communication and coordination among patients, 
                physicians treating the primary disease (oncologists, oncologic surgeons, etc.), fertility 
                specialists performing the fertility preservation procedure and family members is essential.
            </p>
            <h5 class="treatment-subheading">THE POTENTIAL OF OVARIAN TISSUE FREEZING WITH IN VITRO MATURATION</h5>
            <p class="treatment-content">
                Reproductive medicine is rapidly evolving, and one of the possibilities in this area is to in vitro 
                mature the primordial follicles (very immature eggs) contained in the cryopreserved ovarian tissue. 
                If successful, in vitro maturation (IVM) of primordial follicles would eliminate the need to surgically 
                re-transplant the ovarian tissue back into the body. While IVM is currently not able to mature eggs 
                in such an early stage of development, successful IVM of primordial follicles would make hundreds 
                to thousands of eggs in each small strip of frozen ovary available to cancer survivors later in 
                life, rather than the few dozens currently banked from egg or embryo banking cycles.
            </p>
            <h5 class="treatment-subheading">EMBRYO FREEZING</h5>
            <div class="treatment-image-wrapper">
                <img src="" class="treatment-image" />
            </div>
            <p class="treatment-content">
                The ability to freeze &amp; thaw embryos successfully is one of the greatest advancements in 
                assisted reproductive technology. There are two methods of freezing embryosnamely Slow freezing 
                &amp; Vitrification.
                <br>
                Vitrification is a flash or fast freeze technology &amp; the advent of this technique greatly improved 
                outcomes from cryopreserved embryos. Couples who opt for the embryo freezing now experience success 
                rates equal to or better thanthose from fresh embryo transfer cycles.Embryos can be frozen at any 
                stage like from Day 2 (4 celled stage) to Day 5(~150-250 celled blastocyst stage).
            </p>
            <div class="treatment-content">
                <span style="font-weight:700">ADVANTAGES OF FROZEN EMBRYOS</span>
                <ul class="treatment-list">
                    <li>
                        <span style="font-weight:700">Surplus or Supernumerary embryos</span>
                        Surplus or Supernumerary embryos can be frozen for later use. In case the fresh embryo 
                        transfer fails, these embryos provide opportunity of trying again without having to 
                        undergo ovarian stimulation medication &amp; egg retrieval. Development of vitrification 
                        technologies has led to outstanding outcomes, with more &amp; more patients achieving live 
                        birth from a single stimulated cycle.
                    </li>
                    <li>
                        <span style="font-weight:700">Frozen embryo transfer (FET)</span>
                        <ul class="inner-list">
                            <li>
                                <span style="font-weight:700">More Economical</span>
                                Expenses of ovarian stimulation medications, blood work &amp; ultrasound study, egg 
                                retrieval, insemination, embryo culture etc can be evaded.
                            </li>
                            <li>
                                <span style="font-weight:700">Less strenuous &amp; more convenient for the couple</span>
                                Simple estrogen supplementation during the proliferative phase of endometrial 
                                (uterine) preparation &amp; later on addition of progesterone injections to prepare 
                                uterus for embryo implantation. Frozen embryos are thawed, allowed to 
                                equilibrate &amp; expand in culture for few hours, prior to transferring them 
                                to the uterus. The hormonal levels can be maintained at desired levels, unlike 
                                the fresh transfer cycles, thereby the success rates are infact more when compared 
                                to the fresh transfer following ovarian stimulation.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span style="font-weight:700">Freezing all the embryos for future (FET)’s</span>
                        <ul class="inner-list">
                            <li>
                                <span style="font-weight:700"> - </span><br>
                                FET allows reducing the risk of OHSS (ovarian hyperstimulation syndrome), while 
                                maintaining excellent success rates.<br>
                                At DRIVF we carefully monitor patients for OHSS &amp; use stimulation protocols designed 
                                according to individual needs to prevent this from occurring. But sometimes in few 
                                patients say less than 5% of the patients where our clinicians see potential warning 
                                signs that a woman may have risk of OHSS like high estrogen levels more number of 
                                follicles, fluid in the pelvis etc. Then the couple is are recommended for freezing 
                                of all the available embryos rather than proceeding with fresh transfer, as pregnancy 
                                may further increase the OHSS risk. The embryos thus frozen can be safely transferred 
                                in a FET cycle. The pregnancy outcomes will also be far better in FET in such scenario.
                            </li>
                            <li>
                                <span style="font-weight:700"> - </span>
                                 To overcome the negative effect that elevated progesterone levels have on pregnancy 
                                 outcomes. During ovarian stimulation, few women ~ 5- 10% of the women may have raised 
                                 levels of progesterone which maybe detrimental to the endometrium (uterine lining) 
                                 making it less receptive for embryo implantation. Thus the pregnancy rates are rates 
                                 are reduced. If progesterone rises above a critical threshold, the clinician recommend 
                                 to freeze all the available embryos, rather than proceeding with the fresh transfer. 
                                 An FET can then be performed in a cycle without the stimulation medications.<br>
                                 Our data demonstrates that transferring embryos via FET is associated with greater 
                                 chance of success than the fresh transfer in the setting of an elevated progesterone 
                                 level. Women who undergo “Freeze – all” cycle experience the same excellent live-birth 
                                 rates as do women who have a fresh transfer (with normal progesterone & estrogen 
                                 levels) in their FET’s.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span style="font-weight:700">Frozen embryos allow for genetic testing</span>
                        <br><br>
                        For couples with a risk of passing certain genetic conditions, onto their children, we can t
                        est the embryos for certain genetic mutations. This is called as pre-implantation genetic 
                        diagnosis (PGD). After the clinician retrieves the eggs & they are fertilized the embryologist 
                        will biopsy each suitable embryo on day5 or 6 of development. The embryologist then freezes 
                        each embryo individually while awaiting results from the biopsied cells. The clinician & 
                        embryologist then transfer only those embryos after thawing that are free of the genetic 
                        mutation (corresponding medical condition).<br>
                        In addition to testing for genetic mutations (PGD), embryo freezing has allowed for 
                        pre-implantation genetic screening (PGS). PGS looks for abnormalities in chromosome 
                        number, such as trisomy 21, which causes Down’s syndrome and many others that are 
                        likely to result in implantation failure or miscarriage. Likely candidates for this 
                        testing include patients with recurrent pregnancy loss and older women, whoare at 
                        higher risk for chromosomal abnormalities. In appropriately selected candidates, this 
                        testing may result in improved live-births.
                    </li>
                    <li>
                        <span style="font-weight:700">Frozen embryos offer the potential to grow family at a later date</span>
                        <br><br>
                        Vitrified embryos maintain reproductive potential far into the future, giving our patients time 
                        to make decision to expand their families. Frozen embryo transfer can suspend proverbial 
                        biological clock, since the embryos thawed for FET maintain the reproductive potential 
                        associated with age of the egg at the time it was fertilized. For example, if a woman has 
                        her first child at the age of 35 years through IVF &amp; has the remaining embryos frozen at, 
                        she can comeback to have embryos transferred via FET at a time when conceiving with her own 
                        eggs would otherwise be unlikely. Evidence –based medicine &amp; years of research.<br>
                        Evidence based medicine &amp; years of research performed at DRIFF has allowed our patients to 
                        have better treatment options than ever before, with frozen embryos at the forefront of this 
                        technology revolution.
                    </li>
                </ul>
            </div>
            <h5 class="treatment-subheading">FREEZING / CRYOPRESERVATION</h5>
            <p class="treatment-content">
                <span style="font-weight:700">Introduction:</span>
                Cryopreservation or Cryobiology is branch of science which deals with the process of freezing 
                biological material at extreme low temperature, most commonly at 1960C / -3210F in liquid nitrogen.<br>
                At these low temperatures, all the biological activity comes to a standstill including the biochemical 
                reactions that leadto cell death andDNA degradation.This preservation method makes it possible to 
                store living cells as well as other biological material unchanged for centuries.<br>
                The challenge of cryopreservation is to help cells to survive both cooling to extreme temperatures 
                and thawing back to physiological conditions. Intracellular ice formation in particular is a critical 
                issue that has to be controlled to keep the cell membrane intact and the cells alive. The crucial 
                elements to prevent this are the freezing rate (degrees per minute) and the composition of the freezing 
                medium used. The freezing medium generally consists of a diluter, (sometimes) a protein source, as 
                well as a cryoprotectant compound. The choice of most suitable cryprotectant will influence to 
                preservation result and will be different between different cells and different species.
            </p>
            <h5 class="treatment-subheading">SEMEN FREEZING</h5>
            <div class="treatment-content">
                <span style="font-weight:700">Sperm freezing</span> is a process of collecting, analyzing, freezing 
                and storing of a man sperm. The frozen semen samples can be used for assisted reproductive 
                procedures, such as IVF(in-vitro fertilization),IUI (intrauterine insemination) or for sperm 
                donation.
                <span style="font-weight:700;text-transform:uppercase">THE CRYOPRESERVATION PROCESS INVOLVES</span>
                <ul class="treatment-list">
                    <li>Routine screening for STD’S (sexually transmitted diseases) HIV, HbsAg (Hepatitis) and VDRL</li>
                    <li>Providing a semen sample or undergoing a sperm extraction</li>
                    <li>Lab analysis of sperm quality and quantity</li>
                    <li>Freezing of viable sperm</li>
                    <li>Storage of sperm indefinitely</li>
                </ul>
                Semen sample is typically collected through masturbation.Men are generally asked to abstain from 
                sexual activity for 3-5 days to allow best possible specimen. If there are no sperms in the sample 
                or if the man is unable to ejaculate, a surgical retrieval to remove sperm directly from the epididymis 
                or testicles.
                <span style="font-weight:700;text-transform:uppercase">COMMON REASONS FOR CHOOSING TO FREEZE SPERM</span>
                <ul class="treatment-list">
                    <li>Advancing age</li>
                    <li>Deteriorating sperm quality or low quantity</li>
                    <li>Cancer are other medical reasons</li>
                    <li>Prevasectomy patients</li>
                    <li>Career and lifestyle choices, such as those with high risk occupations.</li>
                    <li>Nonavailability at the time of ovulation during treatment</li>
                    <li>As a backup sample incase not able to provide ejaculate on day of IUI or IVF</li>
                </ul>
            </div>
            <div class="treatment-content">
                Special cryoprotectants are used, mixed well with the semen sample, aliquoted into vials or straws 
                properly labeled and frozen. When required these samples are thawed, washed and tested for motility, 
                viability prior to use in IUI or IVF.<br>
                There are no risks or side effects to collecting semen samples naturally (through masturbation) if 
                surgical extraction is required, there are small risks as with any surgery, such as minute bleeding 
                or discomfort.<br>
                Sperm freezing has been successfully used since 1953 to help individuals conceive healthy babies. 
                The process is safe, standardized and continues to improve as technology advances. The primary concern 
                with sperm freezing is that not all sperm survive the freezing and thawing process. However, as most 
                semen ejaculations contain an appropriate number of sperm, the chances of having enough healthy sperm 
                for fertility treatments is very high. Moreover the advantage of frozen sperm sample over fresh is 
                that unhealthy, defective, DNA fragmented spermatozoa become prone to cryodamage and are thus naturally 
                eliminated,leaving healthy, fertile mature, spermatozoa to form healthy embryo and thus offspring. The 
                capability of the surviving sperm cells to fertilise an egg & form an embryo is not jeopardized during 
                the freezing or thawing process.<br>
                Cryopreservation is considered to have no time limit and stored sperm as old as 20 years have been 
                used to create healthy babies.
            </div>
        </div>
    </div>
</template>
<script>
import drRamaButton from './button';
export default {
    components: {
        'drrama-button': drRamaButton
    },
    methods: {
        bookAppointment() {
            this.$router.push({name: "book-appointment"});
        },
        bookAppointmentStyle() {
            return {
                'position':'relative',
                'z-index':'1000000'
            }
        }
    }
}
</script>
<style>
.book-appointment-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
}
</style>
