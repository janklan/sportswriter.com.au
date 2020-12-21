<?php

$tags = ['tennis', 'tag-1', 'tag-2', 'tag-3', 'tag-4', 'tag-5', 'tag-6', 'tag-7', 'tag-8'];
$lipsum = explode(' ', 'consectetur adipiscing elit. Morbi tincidunt finibus massa at imperdiet. Pellentesque congue nisl id purus dapibus suscipit. Vestibulum sit amet nisi vulputate, rutrum lectus vel, congue velit. Suspendisse potenti. Vivamus tempor libero porttitor cursus vehicula. Donec sed efficitur nunc, nec venenatis risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque sit amet odio vitae ipsum feugiat aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id lobortis erat. Aenean pellentesque, est in sodales laoreet, quam enim posuere mi, vitae posuere enim est vel lorem. Aenean vel diam dolor. Integer nec porta mauris. Suspendisse ultricies elit ac auctor bibendum. Integer id ante libero. Donec iaculis vitae tellus at sollicitudin. Maecenas at placerat tellus. Etiam sed fringilla nibh. Duis quis suscipit sapien. Suspendisse potenti. Phasellus quis ligula mollis mauris rhoncus suscipit. Nunc vel sapien eget lectus placerat tempus. Praesent sit amet ante massa. Duis dapibus nisi vitae metus ullamcorper commodo. Pellentesque tincidunt sollicitudin quam, id congue augue ornare ut. Sed consequat ligula a gravida egestas. Pellentesque imperdiet turpis nisl, in fringilla urna tempor eu. In purus turpis, ullamcorper eget magna ut, euismod congue nunc. Pellentesque tincidunt eget odio nec efficitur. Quisque urna lectus, consequat sit amet consequat vel, aliquet a nunc. Nullam luctus consequat lacus, ac sodales est volutpat ut. Cras maximus mollis mauris sed scelerisque. Aenean accumsan enim in ex maximus fringilla. Maecenas justo augue, euismod nec finibus et, tincidunt ornare leo. Cras rutrum tellus at turpis dignissim, a aliquam mi finibus. Duis auctor rutrum enim et porttitor. Aliquam in felis malesuada, consequat elit eget, euismod nibh. Fusce velit dui, laoreet vitae turpis et, euismod tristique dolor. Cras scelerisque ultrices elementum. Fusce ac sapien blandit massa volutpat lacinia. Ut elementum rhoncus tellus, eleifend convallis neque pellentesque ac. Donec nec mi sem. Vestibulum et pretium ipsum, vitae accumsan nisi. Nullam at suscipit dui, lobortis pellentesque est. Nulla id malesuada velit, porttitor consequat augue. Donec dictum leo vel dui mattis, et aliquet nisl ornare. Vivamus varius velit sit amet ante iaculis pulvinar. Pellentesque aliquet erat eu finibus suscipit. In ac gravida lacus, non eleifend nulla. Aenean posuere condimentum quam, in gravida risus euismod eget. Nulla blandit fringilla enim, eu lobortis sem sollicitudin et. Nullam ut odio ac urna tempus mollis ac et libero. Nulla in vehicula mi. Phasellus in orci odio. In at lectus nec turpis volutpat ullamcorper. Donec non dolor lorem. Quisque sollicitudin, mauris maximus bibendum molestie, velit metus rutrum diam, interdum sagittis quam erat eu sem. In in dolor ut nulla molestie vulputate in vel orci. Donec porttitor tellus nec quam hendrerit, at commodo libero pretium. Nam mollis mattis mauris, in luctus nisi gravida vitae. Sed hendrerit lorem ultrices erat egestas volutpat. Phasellus sit amet ipsum congue, scelerisque lorem sit amet, dapibus dui. Nunc tristique luctus ultricies. Duis vitae libero eu libero vestibulum sodales vel ut ante. Donec sed augue vel nisl pulvinar commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.');

for ($i = 100; $i < 199; $i++) {
    shuffle($lipsum);
    shuffle($tags);

    $contents = 
"
---
type: ".(mt_rand(1,100) >= 80 ? 'regular' : 'featured')."
title: Lorem Ipsum ".join(' ', array_slice($lipsum, 31, mt_rand(2, 5)))."
slug: lorem-ipsum-".$i."
date: ".mt_rand(2019, 2020)."-".str_pad(mt_rand(1, 12), 2, '0', STR_PAD_LEFT)."-".str_pad(mt_rand(1, 28), 2, '0', STR_PAD_LEFT)."
author: revans
articleSummary: Lorem Ipsum ".join(' ', array_slice($lipsum, 50, 60))."
tags: [".join(', ', array_slice($tags, 0, mt_rand(0, 8)))."]
---
Lorem Ipsum dolor sit amet, ".join(' ', array_slice($lipsum, 1, 30))."

".join(' ', array_slice($lipsum, 31, 60))."

".join(' ', array_slice($lipsum, 61, 90))."

".join(' ', array_slice($lipsum, 91, 120));


    file_put_contents('./src/pages/archive/lorem-ipsum-'.$i.'.mdx', trim($contents));
}
