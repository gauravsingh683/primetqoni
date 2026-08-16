const fs = require('fs');
const lines = fs.readFileSync('C:\\Users\\DELL 5400\\.gemini\\antigravity\\brain\\970d63b6-8099-468b-b9b1-d956aae1cca8\\.system_generated\\logs\\transcript.jsonl', 'utf8').split('\n');
for (const line of lines) {
    if (line.includes('send_message') && line.includes('tool_calls')) {
        try {
            const j = JSON.parse(line);
            if (j.tool_calls[0].name === 'send_message') {
                fs.writeFileSync('research_output.txt', j.tool_calls[0].args.Message);
            }
        } catch (e) {}
    }
}
