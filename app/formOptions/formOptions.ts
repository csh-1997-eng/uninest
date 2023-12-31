// options.js



export interface Option {
  value: string;
  label: string;
}
  
  export const universityOptions: Option[] = [
    { value: 'Temple University', label: 'Temple University' },
    { value: 'University of Pennsylvania', label: 'University of Pennsylvania' },
    { value: 'Thomas Jefferson University', label: 'Thomas Jefferson University' },
    { value: 'La Salle University', label: 'La Salle University' },
    // Add more options as needed
  ];

  export const stateOfResidencyOptions: Option[] = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Connecticut', label: 'Connecticut' },
    { value: 'Delaware', label: 'Delaware' },
    { value: 'District of Columbia', label: 'District of Columbia' },
    { value: 'Florida', label: 'Florida' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Hawaii', label: 'Hawaii' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'Illinois', label: 'Illinois' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Iowa', label: 'Iowa' },
    { value: 'Kansas', label: 'Kansas' },
    { value: 'Kentucky', label: 'Kentucky' },
    { value: 'Louisiana', label: 'Louisiana' },
    { value: 'Maine', label: 'Maine' },
    { value: 'Maryland', label: 'Maryland' },
    { value: 'Massachusetts', label: 'Massachusetts' },
    { value: 'Michigan', label: 'Michigan' },
    { value: 'Minnesota', label: 'Minnesota' },
    { value: 'Mississippi', label: 'Mississippi' },
    { value: 'Missouri', label: 'Missouri' },
    { value: 'Montana', label: 'Montana' },
    { value: 'Nebraska', label: 'Nebraska' },
    { value: 'Nevada', label: 'Nevada' },
    { value: 'New Hampshire', label: 'New Hampshire' },
    { value: 'New Jersey', label: 'New Jersey' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'New York', label: 'New York' },
    { value: 'North Carolina', label: 'North Carolina' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Ohio', label: 'Ohio' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'Oregon', label: 'Oregon' },
    { value: 'Pennsylvania', label: 'Pennsylvania' },
    { value: 'Rhode Island', label: 'Rhode Island' },
    { value: 'South Carolina', label: 'South Carolina' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Vermont', label: 'Vermont' },
    { value: 'Virginia', label: 'Virginia' },
    { value: 'Washington', label: 'Washington' },
    { value: 'West Virginia', label: 'West Virginia' },
    { value: 'Wisconsin', label: 'Wisconsin' },
    { value: 'Wyoming', label: 'Wyoming' }
    // Add more options as needed
  ];




  export const countryOfBirthOptions: Option[] = [
    // Top 50
    { value: 'United States', label: 'United States' },
    { value: 'China', label: 'China' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Germany', label: 'Germany' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'India', label: 'India' },
    { value: 'France', label: 'France' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Canada', label: 'Canada' },
    { value: 'South Korea', label: 'South Korea' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Turkey', label: 'Turkey' },
    { value: 'Saudi Arabia', label: 'Saudi Arabia' },
    { value: 'Switzerland', label: 'Switzerland' },
    { value: 'Taiwan', label: 'Taiwan' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Norway', label: 'Norway' },
    { value: 'Austria', label: 'Austria' },
    { value: 'United Arab Emirates', label: 'United Arab Emirates' },
    { value: 'Iran', label: 'Iran' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Singapore', label: 'Singapore' },
    { value: 'Israel', label: 'Israel' },
    { value: 'Ireland', label: 'Ireland' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'Philippines', label: 'Philippines' },
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'Finland', label: 'Finland' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Portugal', label: 'Portugal' },
    { value: 'Kazakhstan', label: 'Kazakhstan' },
    { value: 'Qatar', label: 'Qatar' },
    { value: 'Czech Republic', label: 'Czech Republic' },
    { value: 'Romania', label: 'Romania' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'Peru', label: 'Peru' },
  
    // Next 50
    { value: 'Hungary', label: 'Hungary' },
    { value: 'Kuwait', label: 'Kuwait' },
    { value: 'Ukraine', label: 'Ukraine' },
    { value: 'Iraq', label: 'Iraq' },
    { value: 'Morocco', label: 'Morocco' },
    { value: 'Luxembourg', label: 'Luxembourg' },
    { value: 'Ecuador', label: 'Ecuador' },
    { value: 'Sri Lanka', label: 'Sri Lanka' },
    { value: 'Slovakia', label: 'Slovakia' },
    { value: 'Dominican Republic', label: 'Dominican Republic' },
    { value: 'Kenya', label: 'Kenya' },
    { value: 'Oman', label: 'Oman' },
    { value: 'Guatemala', label: 'Guatemala' },
    { value: 'Ethiopia', label: 'Ethiopia' },
    { value: 'Costa Rica', label: 'Costa Rica' },
    { value: 'Panama', label: 'Panama' },
    { value: 'Uruguay', label: 'Uruguay' },
    { value: 'Belarus', label: 'Belarus' },
    { value: 'Tanzania', label: 'Tanzania' },
    { value: 'Lebanon', label: 'Lebanon' },
    { value: 'Macau', label: 'Macau' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'Cuba', label: 'Cuba' },
    { value: 'Azerbaijan', label: 'Azerbaijan' },
    { value: 'Lithuania', label: 'Lithuania' },
    { value: 'Serbia', label: 'Serbia' },
    { value: 'Slovenia', label: 'Slovenia' },
    { value: 'Bulgaria', label: 'Bulgaria' },
    { value: 'Libya', label: 'Libya' },
    { value: 'Croatia', label: 'Croatia' },
    { value: 'Ivory Coast', label: 'Ivory Coast' },
    { value: 'Jordan', label: 'Jordan' },
    { value: 'Tunisia', label: 'Tunisia' },
    { value: 'Bolivia', label: 'Bolivia' },
    { value: 'Cameroon', label: 'Cameroon' },
    { value: 'Latvia', label: 'Latvia' },
    { value: 'Paraguay', label: 'Paraguay' },
    { value: 'Nepal', label: 'Nepal' },
    { value: 'Uzbekistan', label: 'Uzbekistan' },
    { value: 'Estonia', label: 'Estonia' },
    { value: 'Honduras', label: 'Honduras' },
    { value: 'Palestine', label: 'Palestine' },
    { value: 'Bahrain', label: 'Bahrain' },
    { value: 'Democratic Republic of the Congo', label: 'Democratic Republic of the Congo' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Yemen', label: 'Yemen' },
    { value: 'Cyprus', label: 'Cyprus' },
    { value: 'Uganda', label: 'Uganda' },
  
    // Next 50
    { value: 'El Salvador', label: 'El Salvador' },
    { value: 'Malta', label: 'Malta' },
    { value: 'Iceland', label: 'Iceland' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Zambia', label: 'Zambia' },
    { value: 'Albania', label: 'Albania' },
    { value: 'Jamaica', label: 'Jamaica' },
    { value: 'Namibia', label: 'Namibia' },
    { value: 'Botswana', label: 'Botswana' },
    { value: 'Senegal', label: 'Senegal' },
    { value: 'Mali', label: 'Mali' },
    { value: 'North Macedonia', label: 'North Macedonia' },
    { value: 'Guinea', label: 'Guinea' },
    { value: 'Benin', label: 'Benin' },
    { value: 'Gabon', label: 'Gabon' },
    { value: 'Palestinian territories', label: 'Palestinian territories' },
    { value: 'Haiti', label: 'Haiti' },
    { value: 'Tajikistan', label: 'Tajikistan' },
    { value: 'Niger', label: 'Niger' },
    { value: 'Laos', label: 'Laos' },
    { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'Moldova', label: 'Moldova' },
    { value: 'Armenia', label: 'Armenia' },
    { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
    { value: 'Chad', label: 'Chad' },
    { value: 'Suriname', label: 'Suriname' },
    { value: 'Zimbabwe', label: 'Zimbabwe' },
    { value: 'Rwanda', label: 'Rwanda' },
    { value: 'Central African Republic', label: 'Central African Republic' },
    { value: 'Bahamas', label: 'Bahamas' },
    { value: 'Fiji', label: 'Fiji' },
    { value: 'Malawi', label: 'Malawi' },
    { value: 'Eswatini', label: 'Eswatini' },
    { value: 'Sierra Leone', label: 'Sierra Leone' },
    { value: 'Barbados', label: 'Barbados' },
    { value: 'Montenegro', label: 'Montenegro' },
    { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
    { value: 'Mozambique', label: 'Mozambique' },
    { value: 'Liberia', label: 'Liberia' },
    { value: 'Maldives', label: 'Maldives' },
    { value: 'Guyana', label: 'Guyana' },
    { value: 'Swaziland', label: 'Swaziland' },
    { value: 'Benin', label: 'Benin' },
    { value: 'Gambia', label: 'Gambia' },
    { value: 'Cabo Verde', label: 'Cabo Verde' },
    { value: 'Madagascar', label: 'Madagascar' },
    { value: 'Mauritania', label: 'Mauritania' },
    { value: 'Timor-Leste', label: 'Timor-Leste' },
    { value: 'Lesotho', label: 'Lesotho' },
    { value: 'Burkina Faso', label: 'Burkina Faso' },
    { value: 'Papua New Guinea', label: 'Papua New Guinea' },
    { value: 'Nicaragua', label: 'Nicaragua' },
    { value: 'Belize', label: 'Belize' },
    { value: 'Congo', label: 'Congo' },
    { value: 'Swaziland', label: 'Swaziland' },
    { value: 'Greenland', label: 'Greenland' },
    { value: 'Faroe Islands', label: 'Faroe Islands' },
    { value: 'French Guiana', label: 'French Guiana' },
    { value: 'Suriname', label: 'Suriname' },
    { value: 'Guadeloupe', label: 'Guadeloupe' },
    { value: 'Martinique', label: 'Martinique' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Reunion', label: 'Reunion' },
    { value: 'Mayotte', label: 'Mayotte' },
    { value: 'Seychelles', label: 'Seychelles' },
    { value: 'Curacao', label: 'Curacao' },
    { value: 'Aruba', label: 'Aruba' },
    { value: 'Saint Lucia', label: 'Saint Lucia' },
    { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
    { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
    { value: 'Grenada', label: 'Grenada' },
    { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
    { value: 'Bermuda', label: 'Bermuda' },
    { value: 'Cayman Islands', label: 'Cayman Islands' },
    { value: 'Turks and Caicos Islands', label: 'Turks and Caicos Islands' },
    { value: 'British Virgin Islands', label: 'British Virgin Islands' },
    { value: 'Anguilla', label: 'Anguilla' },
    { value: 'Montserrat', label: 'Montserrat' },
    { value: 'Saint Pierre and Miquelon', label: 'Saint Pierre and Miquelon' },
    { value: 'Falkland Islands', label: 'Falkland Islands' },
    { value: 'South Georgia and the South Sandwich Islands', label: 'South Georgia and the South Sandwich Islands' },
    { value: 'Heard Island and McDonald Islands', label: 'Heard Island and McDonald Islands' },
    { value: 'Norfolk Island', label: 'Norfolk Island' },
    { value: 'Christmas Island', label: 'Christmas Island' },
    { value: 'Cocos Islands', label: 'Cocos Islands' },
    { value: 'Pitcairn', label: 'Pitcairn' },
    { value: 'Tokelau', label: 'Tokelau' },
    { value: 'Niue', label: 'Niue' },
    { value: 'Cook Islands', label: 'Cook Islands' },
    { value: 'Tuvalu', label: 'Tuvalu' },
    { value: 'Wallis and Futuna', label: 'Wallis and Futuna' },
    { value: 'Nauru', label: 'Nauru' },
    { value: 'Saint Helena', label: 'Saint Helena' },
    { value: 'Saint Barthélemy', label: 'Saint Barthélemy' },
    { value: 'Saint Martin', label: 'Saint Martin' },
    { value: 'French Polynesia', label: 'French Polynesia' },
    { value: 'Niue', label: 'Niue' },
    { value: 'Cook Islands', label: 'Cook Islands' },
    { value: 'Tuvalu', label: 'Tuvalu' },
    { value: 'Wallis and Futuna', label: 'Wallis and Futuna' },
    { value: 'Nauru', label: 'Nauru' },
    { value: 'Saint Helena', label: 'Saint Helena' },
    { value: 'Saint Barthélemy', label: 'Saint Barthélemy' },
    { value: 'Saint Martin', label: 'Saint Martin' },
    { value: 'French Polynesia', label: 'French Polynesia' },
    { value: 'French Southern and Antarctic Lands', label: 'French Southern and Antarctic Lands' },
    { value: 'Gibraltar', label: 'Gibraltar' },
    { value: 'Akrotiri and Dhekelia', label: 'Akrotiri and Dhekelia' },
    { value: 'Guam', label: 'Guam' },
    { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
    { value: 'American Samoa', label: 'American Samoa' },
    { value: 'Navassa Island', label: 'Navassa Island' },
    { value: 'Baker Island', label: 'Baker Island' },
    { value: 'Howland Island', label: 'Howland Island' },
    { value: 'Jarvis Island', label: 'Jarvis Island' },
    { value: 'Johnston Atoll', label: 'Johnston Atoll' },
    { value: 'Kingman Reef', label: 'Kingman Reef' },
    { value: 'Midway Atoll', label: 'Midway Atoll' },
    { value: 'Wake Island', label: 'Wake Island' },
    { value: 'Palmyra Atoll', label: 'Palmyra Atoll' },
    { value: 'Bajo Nuevo Bank', label: 'Bajo Nuevo Bank' },
    { value: 'Serranilla Bank', label: 'Serranilla Bank' },
    { value: 'South Sudan', label: 'South Sudan' },
    { value: 'Kosovo', label: 'Kosovo' },
    { value: 'Western Sahara', label: 'Western Sahara' },
    { value: 'Transnistria', label: 'Transnistria' },
    { value: 'Somaliland', label: 'Somaliland' },
    { value: 'Artsakh', label: 'Artsakh' },
    { value: 'Taiwan', label: 'Taiwan' },
    { value: 'Niue', label: 'Niue' },
    { value: 'Cook Islands', label: 'Cook Islands' },
    { value: 'Tuvalu', label: 'Tuvalu' },
    { value: 'Wallis and Futuna', label: 'Wallis and Futuna' },
    { value: 'Nauru', label: 'Nauru' },
    { value: 'Saint Helena', label: 'Saint Helena' },
    { value: 'Saint Barthélemy', label: 'Saint Barthélemy' },
    { value: 'Saint Martin', label: 'Saint Martin' },
    { value: 'French Polynesia', label: 'French Polynesia' },
    { value: 'French Southern and Antarctic Lands', label: 'French Southern and Antarctic Lands' },
    { value: 'Gibraltar', label: 'Gibraltar' },
    { value: 'Akrotiri and Dhekelia', label: 'Akrotiri and Dhekelia' },
    { value: 'Guam', label: 'Guam' },
    { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
    { value: 'American Samoa', label: 'American Samoa' },
    { value: 'Navassa Island', label: 'Navassa Island' },
    { value: 'Baker Island', label: 'Baker Island' },
    { value: 'Howland Island', label: 'Howland Island' },
    { value: 'Jarvis Island', label: 'Jarvis Island' },
    { value: 'Johnston Atoll', label: 'Johnston Atoll' },
    { value: 'Kingman Reef', label: 'Kingman Reef' },
    { value: 'Midway Atoll', label: 'Midway Atoll' },
    { value: 'Wake Island', label: 'Wake Island' },
    { value: 'Palmyra Atoll', label: 'Palmyra Atoll' },
    { value: 'Bajo Nuevo Bank', label: 'Bajo Nuevo Bank' },
    { value: 'Serranilla Bank', label: 'Serranilla Bank' },
    { value: 'South Sudan', label: 'South Sudan' },
    { value: 'Kosovo', label: 'Kosovo' },
    { value: 'Western Sahara', label: 'Western Sahara' },
    { value: 'Transnistria', label: 'Transnistria' },
    { value: 'Somaliland', label: 'Somaliland' },
    { value: 'Artsakh', label: 'Artsakh' },
    { value: 'Taiwan', label: 'Taiwan' },
      { value: 'Tajikistan', label: 'Tajikistan' },
      { value: 'Namibia', label: 'Namibia' },
      { value: 'Lesotho', label: 'Lesotho' },
      { value: 'The Gambia', label: 'The Gambia' },
      { value: 'Mauritius', label: 'Mauritius' },
      { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
      { value: 'Eswatini', label: 'Eswatini' },
      { value: 'Djibouti', label: 'Djibouti' },
      { value: 'Fiji', label: 'Fiji' },
      { value: 'Cyprus', label: 'Cyprus' },
      { value: 'Comoros', label: 'Comoros' },
      { value: 'Guyana', label: 'Guyana' },
      { value: 'Bhutan', label: 'Bhutan' },
      { value: 'Solomon Islands', label: 'Solomon Islands' },
      { value: 'Montenegro', label: 'Montenegro' },
      { value: 'Luxembourg', label: 'Luxembourg' },
      { value: 'Suriname', label: 'Suriname' },
      { value: 'Cabo Verde', label: 'Cabo Verde' },
      { value: 'Maldives', label: 'Maldives' },
      { value: 'Malta', label: 'Malta' },
      { value: 'Brunei', label: 'Brunei' },
      { value: 'Belize', label: 'Belize' },
      { value: 'Bahamas', label: 'Bahamas' },
      { value: 'Iceland', label: 'Iceland' },
      { value: 'Vanuatu', label: 'Vanuatu' },
      { value: 'Barbados', label: 'Barbados' },
      { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
      { value: 'Samoa', label: 'Samoa' },
      { value: 'Saint Lucia', label: 'Saint Lucia' },
      { value: 'Kiribati', label: 'Kiribati' },
      { value: 'Micronesia', label: 'Micronesia' },
      { value: 'Grenada', label: 'Grenada' },
      { value: 'Seychelles', label: 'Seychelles' },
      { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
      { value: 'Andorra', label: 'Andorra' },
      { value: 'Dominica', label: 'Dominica' },
      { value: 'Marshall Islands', label: 'Marshall Islands' },
      { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
      { value: 'Liechtenstein', label: 'Liechtenstein' },
      { value: 'Monaco', label: 'Monaco' },
      { value: 'San Marino', label: 'San Marino' },
      { value: 'Palau', label: 'Palau' },
      { value: 'Nauru', label: 'Nauru' },
      { value: 'Tuvalu', label: 'Tuvalu' },
      { value: 'Vatican City', label: 'Vatican City' },
     ];
  
  
  // Add more option arrays as needed
  