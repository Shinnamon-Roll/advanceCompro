const fullName = " Methas  Thongchan. ";

const cleanedName = fullName.trim();
console.log(`Trimmed Name: '${cleanedName}'`);

const nameParts = cleanedName.split(" ");
console.log("Name Parts:", nameParts);

const finalParts = nameParts.filter(Boolean);
console.log("Final Name Parts:", finalParts);

const firstName = finalParts[0];
console.log(`First Name: '${firstName}'`);