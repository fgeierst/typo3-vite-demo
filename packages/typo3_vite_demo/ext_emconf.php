<?php

/**
 * Extension Manager/Repository config file for ext "typo3_vite_demo".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'typo3-vite-demo',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'fluid_styled_content' => '11.5.0-11.5.99',
            'rte_ckeditor' => '11.5.0-11.5.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'FlorianGeierstanger\\Typo3ViteDemo\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Florian Geierstanger',
    'author_email' => 'florian@geierstanger.org',
    'author_company' => 'Florian Geierstanger',
    'version' => '1.0.0',
];
