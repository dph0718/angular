import { Pipe, PipeTransform } from "@angular/core";

// We gots to use  a Pipe decorator to say it's a pipe.
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}