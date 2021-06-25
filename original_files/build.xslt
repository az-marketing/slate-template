<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:fw="http://technolutions.com/framework" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xhtml">
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<template path="/shared/base.xslt" xmlns="http://technolutions.com/framework" />
			<head>
				<link href="/shared/build-fonts.css?v=20160808163042" rel="stylesheet" />
				<link href="/shared/build-mobile-global.css" rel="stylesheet" />
				<script src="/shared/build-mobile-global.js" />
				<link href="/shared/build.css?v=201912021630436" rel="stylesheet" />
				<style>
					html &gt; body { line-height: normal; }
					ul.cr, li.cr { margin: 0; padding: 0; }
					#side {width: 20%;}
					div#menu { width: auto;}
					div#menu ul li a { width: 100%; min-width:100px;  color: #395180; padding: 3px 0 5px 1px; font-weight:600;}
					div#menu ul li a.selected { text-decoration: none;  color: #395180; }
					#main { width: 80%;}
					#global { float: right; margin-right: 5px; }
					#global li { font-size: 12px; list-style: none; }
				</style>
				<meta name="viewport" content="width=device-width" class="cr" />
				<xsl:apply-templates select="xhtml:html/xhtml:head/node()" />
				<!-- Google Tag Manager 
				added pds 6-4-2020 code from Metrics Edge Tiffany Sellwood tiffany@metricsedge.com -->
				<script>
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-ML2BZB');
				</script>
				<!-- End Google Tag Manager -->
			</head>
			<body>
				<!-- Google Tag Manager (noscript) 
				added pds 6-4-2020 code from Metrics Edge Tiffany Sellwood tiffany@metricsedge.com -->
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ML2BZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>
				</noscript>
				<!-- End Google Tag Manager (noscript) -->
				<xsl:copy-of select="xhtml:html/xhtml:body/@*" />
				<div id="page">
					<div class="c_html c_front c_not-logged-in c_no-sidebars c_page-node c_page-node- c_page-node-2105 c_node-type-empty-page cr">

						<!--  -->
						<!-- Header -->
						<!--  -->

						<div id="c_main" class="c_page-row c_page-row-expanded c_page-row-padding-bottom cr">
							<div class="c_adm-section c_adm-section-content cr">
								<div class="c_container cr">
									<div class="c_row cr">
										<article class="c_column c_col-sm-12 cr">
											<a id="c_main-content" class="cr" />
											<h1 class="c_page__title c_title cr" id="c_page-title">Welcome</h1>
											<div id="c_block-bean-double-cta-next-steps-and-ua-fut" class="c_block c_block-bean c_first c_odd cr">
												<div about="/block/double-cta-next-steps-and-ua-fut" typeof="" class="c_ds-1col c_entity c_entity-bean c_bean-double-cta c_view-mode-double_cta_link_and_text c_clearfix cr">
													<div class="c_paragraphs-items c_paragraphs-items-field-double-cta-areas c_paragraphs-items-field-double-cta-areas-text-link-first c_paragraphs-items-text-link-first cr">
														<div id="global" />
														<div id="content" style="padding: 15px;clear:both;">
															<xsl:apply-templates select="xhtml:html/xhtml:body/node()" />
														</div>
													</div>
												</div>
											</div>
										</article>
									</div>
								</div>
							</div>
						</div>
						
						<!--  -->
						<!-- Footer -->
						<!--  -->

					</div>
				</div>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="@* | node()">
		<xsl:copy>
			<xsl:apply-templates select="@* | node()" />
		</xsl:copy>
	</xsl:template>
</xsl:stylesheet>