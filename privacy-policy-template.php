<?php
/*
  Template Name: Legal - Privacy Policy
  Omega Truss Systems — Privacy Policy
  Refleja el funcionamiento real del sitio: el formulario se procesa en el
  servidor de WordPress y se entrega por correo con wp_mail, enviado por SMTP
  (plugin WP Mail SMTP) a través del proveedor de correo de la empresa. Sin
  servicios de formularios de terceros ni base de datos. Terceros: Google Maps (iframes),
  hosting/caché. Sin analytics ni cookies de publicidad.
  Si cambia algo de lo anterior, actualizar este texto.
*/

$company = 'Omega Truss Systems Inc.';
$email   = 'info@omegaequipmentpe.com';
$phone   = '(760) 986-7177';
$contact = home_url('/contact/');
$terms   = home_url('/terms-and-conditions/');

$legal = array(
  'eyebrow' => 'Legal',
  'title'   => 'Privacy Policy',
  'updated' => 'October 1, 2026',
  'intro'   => "<p>This Privacy Policy explains how {$company} (\"Omega,\" \"we,\" \"us\" or \"our\") collects, uses and protects information when you visit our website or submit a consultation request. We collect only what we need to respond to your project inquiry, and we do not sell your personal information.</p>",
  'sections' => array(
    array(
      'id' => 'who-we-are',
      'heading' => 'Who We Are',
      'body' => "<p>{$company} is a custom truss engineering and manufacturing company based in Thousand Palms, California. We engineer, manufacture and deliver custom truss systems for residential, multifamily and commercial construction projects in Southern California. For any privacy question, see <a href=\"#contact-us\">Contact Us</a> below.</p>",
    ),
    array(
      'id' => 'information-we-collect',
      'heading' => 'Information We Collect',
      'body' => "<h3>Information you give us</h3>
<p>When you submit a consultation request through the forms on our website, we collect the information you choose to provide:</p>
<ul>
  <li>Name and email address (required)</li>
  <li>Company, role, and phone number</li>
  <li>Project location, project type and target timeline</li>
  <li>Your message, including any links to project plans you share</li>
</ul>
<p>We also receive the information you share when you call or email us directly.</p>
<h3>Information collected automatically</h3>
<p>Like most websites, our hosting servers automatically record standard technical information when you visit, such as your IP address, browser type, device information, pages requested and the date and time of your visit. These server logs are used for security, troubleshooting and site performance.</p>
<p>Our website does <strong>not</strong> use analytics tools, advertising pixels or tracking cookies.</p>",
    ),
    array(
      'id' => 'how-form-submissions-are-processed',
      'heading' => 'How Form Submissions Are Processed',
      'body' => "<p>When you submit a consultation request:</p>
<ol>
  <li>Your information is sent over an encrypted (HTTPS) connection to our website's server.</li>
  <li>The server checks the request for validity and spam (using a hidden field that automated bots tend to fill in, without tracking you).</li>
  <li>Your submission is delivered as an email to our team through our business email service provider.</li>
</ol>
<p>Our website forms do not use third-party form services, and submissions are not saved in our website's database. Your inquiry is kept in our business email so that our engineering team can respond and follow up on your project.</p>",
    ),
    array(
      'id' => 'how-we-use-information',
      'heading' => 'How We Use Your Information',
      'body' => "<p>We use the information we collect to:</p>
<ul>
  <li>Respond to your consultation request and answer your questions</li>
  <li>Review your project plans and prepare engineering reviews, proposals and quotes</li>
  <li>Communicate with you about your project, scheduling and delivery</li>
  <li>Maintain the security and performance of our website</li>
  <li>Comply with legal obligations and protect our rights</li>
</ul>
<p>We do not use your information for automated decision-making, and we will not add you to marketing lists without your consent.</p>",
    ),
    array(
      'id' => 'how-we-share-information',
      'heading' => 'How We Share Information',
      'body' => "<p>We do not sell your personal information, and we do not share it for cross-context behavioral advertising. We share information only:</p>
<ul>
  <li><strong>With service providers</strong> who help us operate our business, such as our website hosting and email providers, who may process information only on our behalf;</li>
  <li><strong>With project partners</strong>, such as the builder, architect or contractor on your project, when needed to carry out work you have requested;</li>
  <li><strong>For legal reasons</strong>, when required by law, subpoena or legal process, or to protect the rights, property or safety of Omega, our clients or others;</li>
  <li><strong>In a business transfer</strong>, such as a merger, acquisition or sale of assets, subject to this Privacy Policy.</li>
</ul>",
    ),
    array(
      'id' => 'third-party-services',
      'heading' => 'Third-Party Content and Links',
      'body' => "<p>Some pages of our website, such as the Contact and Location pages, display an embedded map provided by Google Maps. When you view those pages, Google may collect information such as your IP address and may set its own cookies, according to the <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google Privacy Policy</a>.</p>
<p>Our website also links to our profiles on Facebook, Instagram and LinkedIn and to other websites. We are not responsible for the privacy practices of these third parties, and we encourage you to review their policies.</p>",
    ),
    array(
      'id' => 'cookies',
      'heading' => 'Cookies',
      'body' => "<p>Our website does not use analytics or advertising cookies. Our content management and caching systems may use strictly necessary cookies, mainly for site administrators who are logged in. Embedded third-party content, such as Google Maps, may set its own cookies as described above. You can block or delete cookies in your browser settings; the main features of our website will continue to work.</p>",
    ),
    array(
      'id' => 'data-retention',
      'heading' => 'Data Retention',
      'body' => "<p>We keep consultation requests and related correspondence for as long as needed to respond to your inquiry, carry out any resulting project, and meet our legal, accounting and record-keeping obligations. When information is no longer needed, we delete it or securely archive it.</p>",
    ),
    array(
      'id' => 'security',
      'heading' => 'Security',
      'body' => "<p>We use reasonable administrative, technical and physical safeguards to protect your information, including encrypted connections for form submissions. However, no website, email system or transmission over the internet is completely secure, and we cannot guarantee absolute security. Please avoid sending highly sensitive information, such as financial account numbers, through our website forms.</p>",
    ),
    array(
      'id' => 'california-privacy-rights',
      'heading' => 'Your California Privacy Rights',
      'body' => "<p>If you are a California resident, you may have the following rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA):</p>
<ul>
  <li><strong>Right to know</strong> the categories and specific pieces of personal information we have collected about you, and how we use and share it;</li>
  <li><strong>Right to delete</strong> personal information we have collected from you, subject to certain exceptions;</li>
  <li><strong>Right to correct</strong> inaccurate personal information;</li>
  <li><strong>Right to opt out</strong> of the sale or sharing of personal information. We do not sell or share personal information;</li>
  <li><strong>Right to non-discrimination</strong> for exercising any of these rights.</li>
</ul>
<p>To make a request, email us at <a href=\"mailto:{$email}\">{$email}</a> or call {$phone}. We will verify your request using the information you provide, such as your name and email address, and respond within the time required by law. You may also use an authorized agent to submit a request on your behalf.</p>
<p>Under California's \"Shine the Light\" law (Civil Code § 1798.83), California residents may ask whether we disclose personal information to third parties for their direct marketing purposes. We do not.</p>",
    ),
    array(
      'id' => 'childrens-privacy',
      'heading' => "Children's Privacy",
      'body' => "<p>Our website and services are intended for construction professionals and property owners. They are not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has sent us personal information, please contact us and we will delete it.</p>",
    ),
    array(
      'id' => 'changes',
      'heading' => 'Changes to This Policy',
      'body' => "<p>We may update this Privacy Policy from time to time. When we do, we will change the \"Last updated\" date at the top of this page. Significant changes will be highlighted on our website. Please also review our <a href=\"{$terms}\">Terms and Conditions</a>.</p>",
    ),
    array(
      'id' => 'contact-us',
      'heading' => 'Contact Us',
      'body' => "<p>If you have questions about this Privacy Policy or how we handle your information, contact us:</p>
<p><strong>{$company}</strong><br>
Thousand Palms, California<br>
Email: <a href=\"mailto:{$email}\">{$email}</a><br>
Phone: <a href=\"tel:+17609867177\">{$phone}</a><br>
Or use our <a href=\"{$contact}\">contact form</a>.</p>",
    ),
  ),
);

get_header();
get_template_part('template-parts/legal-page', null, $legal);
get_footer();
