import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User} from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SupabaseService {
  private supabase: SupabaseClient;
  private rpcFunctions: string[] = ['order_details_sql', 'orders_sql', 'books_sql', 'customers_sql'];

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  private findRpcFunction(sqlQuery: string){
    const regex = /FROM\s+(\w+)/i;
    const match = regex.exec(sqlQuery);
    if (match && match.length > 1 && this.rpcFunctions.includes(match[1] + '_sql')) {
      return match[1] + '_sql';
    } else {
      return 'null_sql';
    }
  }

  async get(sqlQuery: string) {
    return await this.supabase.rpc(this.findRpcFunction(sqlQuery), {sql_query: sqlQuery});
  }
}