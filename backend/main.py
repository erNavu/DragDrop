from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    G = nx.DiGraph()
    G.add_nodes_from([node['id'] for node in nodes])
    G.add_edges_from([(edge['source'], edge['target']) for edge in edges])

    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag = nx.is_directed_acyclic_graph(G)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}