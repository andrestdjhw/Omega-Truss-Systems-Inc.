<?php
/*
  Template Name: Legal - Terms and Conditions
  Omega Truss Systems — Terms and Conditions
  El scope de servicios (sección 2) sigue la aclaración del cliente:
  Omega engineers, manufactures and delivers — no installation, roof
  sheathing ni otros trabajos en obra.
*/

$company = 'Omega Truss Systems Inc.';
$email   = 'info@omegaequipmentpe.com';
$phone   = '(760) 986-7177';
$contact = home_url('/contact/');
$privacy = home_url('/privacy-policy/');

$legal = array(
  'eyebrow' => 'Legal',
  'title'   => 'Terms and Conditions',
  'updated' => 'October 1, 2026',
  'intro'   => "<p>These Terms and Conditions (\"Terms\") govern your use of the website operated by {$company} (\"Omega,\" \"we,\" \"us\" or \"our\"). By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the website.</p>",
  'sections' => array(
    array(
      'id' => 'use-of-website',
      'heading' => 'Use of This Website',
      'body' => "<p>This website provides information about Omega and our services, and lets you request a project consultation. You may use it only for lawful purposes and in accordance with these Terms. You must be at least 18 years old, or the age of majority where you live, to submit a consultation request.</p>",
    ),
    array(
      'id' => 'our-services',
      'heading' => 'Our Services',
      'body' => "<p>Omega specializes in the <strong>engineering, manufacturing and delivery</strong> of custom truss systems. Omega does not perform truss installation, roof sheathing or other on-site construction work. Any such work on your project is the responsibility of you, your builder or your contractors, under separate agreements with them.</p>",
    ),
    array(
      'id' => 'informational-purposes',
      'heading' => 'Informational Purposes Only',
      'body' => "<p>The content on this website, including service descriptions, project examples, performance statistics and answers to frequently asked questions, is provided for general information only. It is <strong>not engineering advice</strong> and does not replace a project-specific engineering review. Performance figures, such as delivery and defect rates, reflect our internal measurements and are not a guarantee of results on any particular project.</p>",
    ),
    array(
      'id' => 'consultation-requests',
      'heading' => 'Consultation Requests and Quotes',
      'body' => "<p>Submitting a consultation request through our website does not create a contract or a client relationship, and it does not obligate either party to proceed with a project. Any quote, proposal, engineering package, schedule or delivery date is subject to a separate written agreement signed by Omega. If there is a conflict between these Terms and a signed agreement, the signed agreement controls.</p>
<p>We aim to respond to inquiries within one business day, but response times are not guaranteed.</p>",
    ),
    array(
      'id' => 'your-submissions',
      'heading' => 'Your Submissions',
      'body' => "<p>When you submit information or project plans to us, you confirm that the information is accurate and that you have the right to share it. You give Omega permission to use the information and plans you submit to evaluate your project, prepare reviews and quotes, and communicate with you. We handle your personal information as described in our <a href=\"{$privacy}\">Privacy Policy</a>.</p>
<p>Please do not submit confidential information that is not needed to evaluate your project.</p>",
    ),
    array(
      'id' => 'intellectual-property',
      'heading' => 'Intellectual Property',
      'body' => "<p>All content on this website, including text, photographs, videos, graphics, logos, the Omega name and trademarks, and the website design, is owned by or licensed to Omega and is protected by copyright, trademark and other laws. You may view and print pages for your personal or internal business use. You may not copy, reproduce, modify, distribute or use our content for commercial purposes without our prior written permission.</p>",
    ),
    array(
      'id' => 'acceptable-use',
      'heading' => 'Acceptable Use',
      'body' => "<p>When using this website, you agree not to:</p>
<ul>
  <li>Submit false, misleading or fraudulent information, or impersonate any person or company;</li>
  <li>Send spam, unsolicited advertising or automated submissions through our forms;</li>
  <li>Upload or link to malware or other harmful content;</li>
  <li>Attempt to gain unauthorized access to the website, its servers or related systems, or interfere with their operation;</li>
  <li>Use bots, scrapers or other automated means to collect content or information from the website.</li>
</ul>",
    ),
    array(
      'id' => 'third-party-links',
      'heading' => 'Third-Party Links and Content',
      'body' => "<p>This website may include links to, or embedded content from, third parties, such as Google Maps and social media platforms. We do not control and are not responsible for third-party websites, content or practices. Your use of them is governed by their own terms and policies.</p>",
    ),
    array(
      'id' => 'disclaimer',
      'heading' => 'Disclaimer of Warranties',
      'body' => "<p>This website and its content are provided <strong>\"as is\" and \"as available,\"</strong> without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement. We do not guarantee that the website will be uninterrupted, error-free or free of viruses or other harmful components. Warranties for our products and services, if any, are provided only in a signed written agreement.</p>",
    ),
    array(
      'id' => 'limitation-of-liability',
      'heading' => 'Limitation of Liability',
      'body' => "<p>To the fullest extent permitted by law, Omega and its owners, employees and agents will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data or business opportunities, arising from or related to your use of, or inability to use, this website or its content. Nothing in these Terms limits liability that cannot be limited under applicable law.</p>",
    ),
    array(
      'id' => 'indemnification',
      'heading' => 'Indemnification',
      'body' => "<p>You agree to indemnify and hold harmless Omega and its owners, employees and agents from any claims, losses, liabilities and expenses, including reasonable attorneys' fees, arising from your misuse of this website or your violation of these Terms.</p>",
    ),
    array(
      'id' => 'governing-law',
      'heading' => 'Governing Law',
      'body' => "<p>These Terms are governed by the laws of the State of California, without regard to its conflict-of-law rules. Any dispute arising from these Terms or your use of this website will be brought exclusively in the state or federal courts located in Riverside County, California, and you consent to the jurisdiction of those courts.</p>",
    ),
    array(
      'id' => 'changes',
      'heading' => 'Changes to These Terms',
      'body' => "<p>We may update these Terms from time to time. When we do, we will change the \"Last updated\" date at the top of this page. Your continued use of the website after changes are posted means you accept the updated Terms. If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.</p>",
    ),
    array(
      'id' => 'contact-us',
      'heading' => 'Contact Us',
      'body' => "<p>If you have questions about these Terms, contact us:</p>
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
